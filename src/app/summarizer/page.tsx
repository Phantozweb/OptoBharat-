"use client";

import { useState, type FormEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { summarizeArticle, type SummarizeArticleInput, type SummarizeArticleOutput } from '@/ai/flows/summarize-article';
import { Loader2, Wand2, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  articleContent: z.string().min(100, { message: "Article content must be at least 100 characters." }).max(15000, {message: "Article content must be at most 15,000 characters."}),
});

type SummarizerFormValues = z.infer<typeof formSchema>;

export default function SummarizerPage() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<SummarizerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleContent: '',
    },
  });

  const onSubmit: SubmitHandler<SummarizerFormValues> = async (data) => {
    setIsLoading(true);
    setSummary(null);
    try {
      const input: SummarizeArticleInput = { articleContent: data.articleContent };
      const result: SummarizeArticleOutput = await summarizeArticle(input);
      setSummary(result.summary);
    } catch (error) {
      console.error("Error summarizing article:", error);
      toast({
        variant: "destructive",
        title: "Summarization Failed",
        description: "Could not summarize the article. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopySummary = () => {
    if (summary) {
      navigator.clipboard.writeText(summary)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
          toast({ title: "Copied to clipboard!" });
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
          toast({ variant: "destructive", title: "Copy Failed", description: "Could not copy summary to clipboard." });
        });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Wand2 className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-headline">AI Article Summarizer</CardTitle>
          <CardDescription>
            Paste your article content below to get a concise summary powered by AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="articleContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="articleContent" className="text-lg">Article Content</FormLabel>
                    <FormControl>
                      <Textarea
                        id="articleContent"
                        placeholder="Paste the full article text here..."
                        className="min-h-[200px] text-base"
                        {...field}
                        aria-describedby="articleContent-message"
                      />
                    </FormControl>
                    <FormMessage id="articleContent-message" />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Summarize Article
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {summary && (
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-headline">Summary</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleCopySummary} aria-label="Copy summary">
              {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed whitespace-pre-line">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
