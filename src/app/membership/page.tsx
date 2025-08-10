"use client";

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UserPlus, ShieldCheck, Search, Users, Award, Crown, ArrowUpDown, BarChart2 } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from "recharts";
import { winners as optopreneurWinners } from '@/lib/events-data';
import { winners as quizWinners } from '@/lib/quiz-event-data';


interface Member {
  name: string;
  state: string;
  regNo: string;
  role?: string;
  award?: string;
  zone?: string;
}

const originalMembers: { name: string; state: string }[] = [
  { name: 'Janarthan Veeramani', state: 'Tamil Nadu' },
  { name: 'M.Mega Dharshini', state: 'Tamil Nadu' },
  { name: 'J.Rithnica', state: 'Tamil Nadu' },
  { name: 'Shobana priya .s', state: 'Tamil Nadu' },
  { name: 'Surekha M', state: 'Tamil Nadu' },
  { name: 'Arbaz', state: 'Uttar Pradesh' },
  { name: 'Shahijul Sheikh', state: 'Assam' },
  { name: 'Santosh Kumar Das', state: 'Odisha' },
  { name: 'RevathiSaravanan', state: 'Tamil Nadu' },
  { name: 'Bablu Kumar', state: 'Jharkhand' },
  { name: 'AMIT KUMAR', state: 'Jharkhand' },
  { name: 'Namima Foriz', state: 'Assam' },
  { name: 'ANSHI JHA', state: 'Uttar Pradesh' },
  { name: 'Tribhuvan Yadav', state: 'Uttar Pradesh' },
  { name: 'Maryam Jabbar', state: 'Pakistan' },
  { name: 'Aniket', state: 'Uttar Pradesh' },
  { name: 'Nafsin Amin Khan', state: 'Assam' },
  { name: 'Muzahid kamal', state: 'Uttar Pradesh' },
  { name: 'Anmol Singh', state: 'Uttar Pradesh' },
  { name: 'Faizanullah Siddiqui', state: 'Uttar Pradesh' },
  { name: 'Sudheer pal', state: 'Uttar Pradesh' },
  { name: 'Akeel Ahmad', state: 'Uttar Pradesh' },
  { name: 'Rohan mall', state: 'Uttar Pradesh' },
  { name: 'Harshita Dubey', state: 'Uttar Pradesh' },
  { name: 'Aditya Soni', state: 'Uttar Pradesh' },
  { name: 'Nidhi Yadav', state: 'Uttar Pradesh' },
  { name: 'Nihal shakya', state: 'Uttar Pradesh' },
  { name: 'Vivek Gupta', state: 'Lakhimpur Kheri' },
  { name: 'Sandeep kumar', state: 'Uttar Pradesh' },
  { name: 'Madhu tiwari', state: 'Uttar Pradesh' },
  { name: 'Abhishek Kumar', state: 'Uttar Pradesh' },
  { name: 'Shruti MISHRA', state: 'Uttar Pradesh' },
  { name: 'Gauri Kashyap', state: 'Uttar Pradesh' },
  { name: 'Muskan pal', state: 'Uttar Pradesh' },
  { name: 'Sweta Gautam', state: 'Uttar Pradesh' },
  { name: 'Nisha', state: 'Uttar Pradesh' },
  { name: 'Hitkarsh pal', state: 'Uttar Pradesh' },
  { name: 'Mohd Khalid', state: 'Uttar Pradesh' },
  { name: 'Shaily Yadav', state: 'Uttar Pradesh' },
  { name: 'Shekhar Shrivastav', state: 'Uttar Pradesh' },
  { name: 'Pawan kant bhaskar', state: 'Uttar Pradesh' },
  { name: 'JAFEER AHMAD', state: 'Uttar Pradesh' },
  { name: 'Riya Raj', state: 'Uttar Pradesh' },
  { name: 'Sadaf', state: 'Uttar Pradesh' },
  { name: 'Divyanshu sahu', state: 'Uttar Pradesh' },
  { name: 'Akanksha rajvanshi', state: 'Uttar Pradesh' },
  { name: 'Neha', state: 'Uttar Pradesh' },
  { name: 'Sunaina', state: 'Uttar Pradesh' },
  { name: 'Deeksha pandey', state: 'Uttar Pradesh' },
  { name: 'Mujahidul Islam', state: 'Assam' },
  { name: 'Mobasshira', state: 'Delhi' },
  { name: 'P.kayal vizhi', state: 'Tamil Nadu' },
  { name: 'PRAVAL PRATAP SINGH', state: 'Uttar Pradesh' },
  { name: 'Tyrell Nangombe', state: 'Punjab' },
  { name: 'Abhisek buragohain', state: 'Assam' },
  { name: 'Faseeha tarannum', state: 'Tamil Nadu' },
  { name: 'Bibartan Adhikary', state: 'West Bengal' },
  { name: 'Nyabi Rai', state: 'Arunachal Pradesh' },
  { name: 'Sadik Zaman', state: 'Assam' },
  { name: 'Tanbeer Ishraq Ahmed', state: 'Assam' },
  { name: 'Subham Dey', state: 'Assam' },
  { name: 'Althaf ur rahaman', state: 'Karnataka' },
  { name: 'Lakshajit Hazarika', state: 'Assam' },
  { name: 'Pradeep mangawa', state: 'Rajasthan' },
  { name: 'Mohammad Anas khan', state: 'Telangana' },
  { name: 'Jasla P P', state: 'Kerala' },
  { name: 'Kilika B. Chishi', state: 'Nagaland' },
  { name: 'Abu Fatah Abdulla', state: 'Assam' },
  { name: 'Anu Shakwa', state: 'Meghalaya' },
  { name: 'Rimpi Kalita', state: 'Assam' },
  { name: 'Nayanmoni Regon', state: 'Assam' },
  { name: 'Gidar gamkak', state: 'Arunachal Pradesh' },
  { name: 'Gopika. V', state: 'Tamil Nadu' },
  { name: 'Ramesh jha', state: 'Bihar' },
  { name: 'Jitesh Yadav', state: 'Uttar Pradesh' },
  { name: 'Be-an.h.phom', state: 'Nagaland' },
  { name: 'MOHD ARWAZ', state: 'Uttar Pradesh' },
  { name: 'Fathima safa .R', state: 'Tamil Nadu' },
  { name: 'Rohit Das', state: 'Assam' },
  { name: 'Arslan ahmad qadiri', state: 'Uttar Pradesh' },
  { name: 'Sahinoor', state: 'Delhi' },
  { name: 'Riju Ghosh', state: 'West Bengal' },
  { name: 'Mohammad Naaz', state: 'Delhi' },
  { name: 'Jeyshree Balasubramanian', state: 'Tamil Nadu' },
  { name: 'Km Rashmi', state: 'Uttar Pradesh' },
  { name: 'Yashwant Kumar', state: 'Delhi' },
  { name: 'Jayant Jha', state: 'Bihar' },
  { name: 'Appu Raj', state: 'Nagaland' },
  { name: 'Vithul Vijayan', state: 'India' },
  { name: 'Mukul Gautam', state: 'Uttar Pradesh' },
  { name: 'Anurag singh', state: 'Uttar Pradesh' },
  { name: 'ABDUL AZIZ KHAN', state: 'Bihar' },
  { name: 'Rabjot Singh Gulati', state: 'Uttar Pradesh' },
  { name: 'Sumbul Neshat', state: 'West Bengal' },
  { name: 'Sekh Joynal Abedin', state: 'West Bengal' },
  { name: 'Aneesh Prasada Pandelu', state: 'Karnataka' },
  { name: 'Pushpanjali prajapati', state: 'Uttar Pradesh' },
  { name: 'Rayhan Ahammed', state: 'Tripura' },
  { name: 'A.Keerthana sri', state: 'Tamil Nadu' },
  { name: 'Vanisri.R', state: 'Tamil Nadu' },
  { name: 'Moh Asad', state: 'Chandigarh' },
  { name: 'Kulprit kaur', state: 'Karnataka' },
  { name: 'Salal Khan', state: 'Uttar Pradesh' },
  { name: 'S.Sivakavitha', state: 'Tamil Nadu' },
  { name: 'Akshaya', state: 'Tamil Nadu' },
  { name: 'Keerthana', state: 'Tamil Nadu' },
  { name: 'Kaviya J', state: 'Tamil Nadu' },
  { name: 'Sreesandhiya.g', state: 'Tamil Nadu' },
  { name: 'Gopika.P', state: 'Tamil Nadu' },
  { name: 'Jayapriya R', state: 'Tamil Nadu' },
  { name: 'K.Manju', state: 'Tamil Nadu' },
  { name: 'Binu Sudheer', state: 'Karnataka' },
  { name: 'C.S.Dharshini', state: 'Tamil Nadu' },
  { name: 'Lav kumar sah', state: 'Himachal Pradesh' },
  { name: 'Mohammad Naaz', state: 'Delhi' },
  { name: 'Shubham', state: 'Uttar Pradesh' },
  { name: 'Abhishek Raj', state: 'Uttar Pradesh' },
  { name: 'Nandhana. R', state: 'Kerala' },
  { name: 'Deepak Kumar', state: 'Bihar' },
  { name: 'Rebekah R', state: 'Tamil Nadu' },
  { name: 'Kevin koech', state: 'Kenya' },
  { name: 'Leo Johnson', state: 'Kerala' },
  { name: 'Manju George Tiwari', state: 'Kerala' },
  { name: 'Priyadharshini J', state: 'Tamil Nadu' },
  { name: 'MARWAN K', state: 'Kerala' },
  { name: 'Mumina Akkarapallikkal', state: 'Kerala' },
  { name: 'Swati jain', state: 'Uttar Pradesh' },
  { name: 'NITHESH S SHETTY', state: 'Karnataka' },
  { name: 'Ankush verma', state: 'Madhya Pradesh' },
  { name: 'RIYAJ RATHOD', state: 'Gujarat' },
  { name: 'Alishba Raouf', state: 'Uttar Pradesh' },
  { name: 'Asif Khurram', state: 'Bihar' },
  { name: 'Sarthaka kumar jena', state: 'Odisha' },
  { name: 'Mr Deepak Kumawat', state: 'Rajasthan' },
  { name: 'Bushra Yusuf', state: 'Delhi' },
  { name: 'Rakesh Raushan', state: 'Bihar' },
  { name: 'Shadiya Shirin T.C', state: 'Kerala' },
  { name: 'P.Archana sri', state: 'Tamil Nadu' },
  { name: 'Vaishali singh', state: 'Uttar Pradesh' },
  { name: 'Santanu Bera', state: 'West Bengal' },
  { name: 'Nishokvarshan', state: 'Tamil Nadu' },
  { name: 'RAKHIBUL HASSAN', state: 'West Bengal' },
  { name: 'Suresh Kumar Shahil', state: 'Uttar Pradesh' },
  { name: 'Raju Kumhar', state: 'Rajasthan' },
  { name: 'Meghraj Arya', state: 'Uttar Pradesh' },
  { name: 'Gandhi khushboo paraskumar', state: 'Gujarat' },
  { name: 'Rohan P', state: 'Kerala' },
  { name: 'Ram kesh', state: 'Uttar Pradesh' },
  { name: 'Vikas malik', state: 'Uttar Pradesh' },
  { name: 'khushboo paraskumar Gandhi', state: 'Gujarat' },
  { name: 'Satyendra Singh', state: 'Uttar Pradesh' },
  { name: 'Subhasis Saha', state: 'West Bengal' },
  { name: 'Shani kumar', state: 'Uttar Pradesh' },
  { name: 'Pranshu Pandey', state: 'Uttar Pradesh' },
  { name: 'Sonu Maurya', state: 'Uttar Pradesh' },
  { name: 'Anish Kumar sahoo', state: 'Odisha' },
  { name: 'Roshani Nishad', state: 'Uttar Pradesh' },
  { name: 'Sahbaj khan', state: 'Haryana' },
  { name: 'Gautam Mathur', state: 'Haryana' },
  { name: 'Purushotam krishna Yadav', state: 'Gujarat' },
  { name: 'Md Nurjaman', state: 'West Bengal' },
  { name: 'Pradumn Vishwakarma', state: 'Uttar Pradesh' },
  { name: 'Chithra', state: 'Kerala' },
  { name: 'Ambrish yadav', state: 'Gujarat' },
  { name: 'Ritu chaudhary', state: 'Uttar Pradesh' },
  { name: 'Divya Kumari', state: 'Bihar' },
  { name: 'Ritik kumar', state: 'Bihar' },
  { name: 'Sageer alam', state: 'Uttar Pradesh' },
  { name: 'AMIT KUMAR', state: 'Uttar Pradesh' },
  { name: 'Anushka Saini', state: 'Uttar Pradesh' },
  { name: 'CHANDRA SHEKHAR VERMA', state: 'Uttar Pradesh' },
  { name: 'DINI JOY', state: 'Kerala' },
  { name: 'Khushnuma yaseen', state: 'Uttar Pradesh' },
  { name: 'Vivek Shaw', state: 'West Bengal' },
  { name: 'Amar Bahadur', state: 'Uttar Pradesh' },
  { name: 'Pinky Bhardwaj', state: 'Uttar Pradesh' },
  { name: 'Gajendra Kumar malav', state: 'Rajasthan' },
  { name: 'Umesh Kumar', state: 'Bihar' },
  { name: 'Kajal', state: 'Uttar Pradesh' },
  { name: 'Priyanshu Darji', state: 'Gujarat' },
  { name: 'Avinash Ganeshrao Gonte', state: 'Maharashtra' },
  { name: 'Aditya laxmikant shewale', state: 'Maharashtra' },
  { name: 'Snober Akhtar', state: 'Jammu and Kashmir' },
  { name: 'Trivendra', state: 'Uttar Pradesh' },
  { name: 'Arju thakur', state: 'Uttar Pradesh' },
  { name: 'Mariyam khan', state: 'Uttar Pradesh' },
  { name: 'RAJIUL HOQUE', state: 'West Bengal' },
  { name: 'MOHAMED FAZIL E', state: 'Tamil Nadu' },
  { name: 'M.ARIGANESAN', state: 'Tamil Nadu' },
  { name: 'Mohammed Abdul Rehman', state: 'Telangana' },
  { name: 'Karunya', state: 'Tamil Nadu' },
  { name: 'HARIOM MISHRA', state: 'Uttar Pradesh' },
  { name: 'ASHIQUE IQBAL MOLLA', state: 'West Bengal' },
  { name: 'MUHAMMED SWALIH', state: 'Kerala' },
  { name: 'SOURAV DEY', state: 'West Bengal' },
  { name: 'Nithya Ann Philip', state: 'Kerala' },
  { name: 'Sandeep Patil', state: 'Gujarat' },
  { name: 'Mohd Amir', state: 'Uttar Pradesh' },
  { name: 'Aman Singh', state: 'Uttar Pradesh' },
  { name: 'Mewa Lal', state: 'India' },
  { name: 'Zainab ansari', state: 'Uttar Pradesh' },
  { name: 'Afreen naqvi', state: 'Rajasthan' },
  { name: 'Nikhil Samariya', state: 'Rajasthan' },
  { name: 'Rohit Kumar', state: 'Jharkhand' },
  { name: 'Sudipta Banerjee', state: 'West Bengal' },
  { name: 'Umesh Kumar', state: 'Haryana' },
  { name: 'Rajratna Ramesh Patil', state: 'Maharashtra' },
  { name: 'Vidhya.N', state: 'Tamil Nadu' },
  { name: 'Manobharathi M', state: 'Tamil Nadu' },
  { name: 'Rinku Yadav', state: 'Uttar Pradesh' },
  { name: 'Sachin Kumar', state: 'Delhi' },
  { name: 'Shivam suman', state: 'Bihar' },
  { name: 'Vidhi Kaushal Patel', state: 'Gujarat' },
  { name: 'Shadab Anwar', state: 'Bihar' },
  { name: 'S.V.Shreevaishali', state: 'Tamil Nadu' },
  { name: 'M.Ansiya Parveen', state: 'Tamil Nadu' },
  { name: 'G.Miruthula', state: 'Tamil Nadu' },
  { name: 'M. Fazila Fathima', state: 'Tamil Nadu' },
  { name: 'Gayathri', state: 'Tamil Nadu' },
  { name: 'Swasthika Bharani', state: 'Tamil Nadu' },
  { name: 'A.Mubassara', state: 'Tamil Nadu' },
  { name: 'Deepasri', state: 'Tamil Nadu' },
  { name: 'J.joshua benial', state: 'Tamil Nadu' },
  { name: 'Jenish F', state: 'Tamil Nadu' },
  { name: 'RASIYA A H', state: 'Kerala' },
  { name: 'JAWAD UL HASSAN', state: 'Karnataka' },
  { name: 'Md Alam Geer Khan', state: 'Uttar Pradesh' },
  { name: 'Mohammed Habeeb Khan', state: 'Telangana' },
  { name: 'Nnani Chukwubuikem Benedict', state: 'Nigeria' },
  { name: 'Sachin Yadav', state: 'Uttar Pradesh' },
  { name: 'Dr Piyush Bhardwaj', state: 'Rajasthan' },
  { name: 'Ankita Sudhir Jadhav', state: 'Maharashtra' },
  { name: 'J.subashini', state: 'Tamil Nadu' },
  { name: 'Safia Rabbani', state: 'Uttar Pradesh' },
  { name: 'Binsiya shamla', state: 'Kerala' },
  { name: 'Mehejabeen.k', state: 'Kerala' },
  { name: 'Afna s', state: 'Kerala' },
  { name: 'Shifana ps', state: 'Kerala' },
  { name: 'Fida Fathima K N', state: 'Kerala' },
  { name: 'Mufeeda', state: 'Kerala' },
  { name: 'Sabira ki', state: 'Kerala' },
  { name: 'Sumaiyya A Azim Shaikh', state: 'Maharashtra' },
  { name: 'Abdul Kalam azad', state: 'Delhi' },
  { name: 'Mohammad Adnan', state: 'Delhi' },
  { name: 'Abhishek Jaiswal', state: 'Maharashtra' },
  { name: 'JALALUDDIN KHAN', state: 'Delhi' },
  { name: 'Naved Ali', state: 'Delhi' },
  { name: 'Faizan Neyaz', state: 'Delhi' },
  { name: 'Moh Sameer', state: 'Uttar Pradesh' },
  { name: 'Sonal', state: 'Delhi' },
  { name: 'Yukta', state: 'Haryana' },
  { name: 'Maham parween', state: 'Delhi' },
  { name: 'Bushra sajjad', state: 'Uttar Pradesh' },
  { name: 'Sakshi', state: 'Delhi' },
  { name: 'Madhu Prasad', state: 'Delhi' },
  { name: 'Ansh Baria', state: 'Delhi' },
  { name: 'ASIF SHAIK', state: 'Telangana' },
  { name: 'Anshi jha', state: 'Uttar Pradesh' },
  { name: 'Jay Kumar', state: 'Rajasthan' },
  { name: 'SHEEBA', state: 'Uttar Pradesh' },
  { name: 'Delina Chyrmang', state: 'Meghalaya' },
  { name: 'Mohd Junaid', state: 'Uttar Pradesh' },
  { name: 'Rehan Ahamad.', state: 'Uttar Pradesh' },
  { name: 'Irbaz Miraji', state: 'Karnataka' },
  { name: 'Askar', state: 'Kerala' },
  { name: 'Sirin Saine Riba', state: 'West Bengal' },
  { name: 'A SRINIVAS', state: 'Telangana' },
  { name: 'Anjana pk', state: 'Kerala' },
  { name: 'Anite Mariya Mathew', state: 'Kerala' },
  { name: 'Arvind rav', state: 'Uttar Pradesh' },
  { name: 'Abitha S', state: 'Kerala' },
  { name: 'Ms Ambika G Nayak', state: 'Karnataka' },
  { name: 'Rangappa Sainath', state: 'Telangana' },
  { name: 'Jebasri', state: 'Karnataka' },
  { name: 'Mayuri', state: 'Tamil Nadu' },
  { name: 'Aneesha Sulthana np', state: 'Kerala' },
  { name: 'Naina Jawed', state: 'Jharkhand' },
  { name: 'Mohd Sakib', state: 'Uttar Pradesh' },
  { name: 'Navjot singh', state: 'Uttar Pradesh' },
  { name: 'Ayaz Raza', state: 'Bihar' },
  { name: 'DANISH NAWAZ', state: 'Bihar' },
  { name: 'MOHD Raqib', state: 'Uttar Pradesh' },
  { name: 'FASNA EK', state: 'Kerala' },
  { name: 'Md zeeshan ali', state: 'Bihar' },
  { name: 'Anshika singh', state: 'Bihar' },
  { name: 'Shagufi', state: 'Uttar Pradesh' },
  { name: 'Sareesh khan', state: 'Uttar Pradesh' },
  { name: 'Ayush Sharma', state: 'Himachal Pradesh' },
  { name: 'Jasmine', state: 'Rajasthan' },
  { name: 'Tabassum parween', state: 'Bihar' },
  { name: 'Optom K P Singh Patel', state: 'Uttar Pradesh' },
  { name: 'Tayyaba saifi', state: 'Uttar Pradesh' },
  { name: 'Rudranil Ghosal', state: 'West Bengal' },
  { name: 'Debasmita Dutta', state: 'West Bengal' },
  { name: 'Tusha', state: 'Delhi' },
  { name: 'L. vijayashanthi', state: 'Tamil Nadu' },
  { name: 'M.Abinaya Lakshmi', state: 'Tamil Nadu' },
  { name: 'A.Braseetha', state: 'Tamil Nadu' },
  { name: 'Varsha Singh', state: 'Uttar Pradesh' },
  { name: 'KADEEJA SHERIN PA', state: 'Kerala' },
  { name: 'SOURENDU SARKAR', state: 'West Bengal' },
  { name: 'Sangeeta Yadav', state: 'Odisha' },
  { name: 'Rishav raj kashyap', state: 'Uttar Pradesh' },
  { name: 'Anika Pandey', state: 'Uttar Pradesh' },
  { name: 'Santiya William', state: 'Tamil Nadu' },
  { name: 'Zeermika Teronpi', state: 'Assam' },
  { name: 'Sneha Khandelwal', state: 'Odisha' },
  { name: 'MD Saqib', state: 'Uttar Pradesh' },
  { name: 'Khalek uddin', state: 'Assam' },
  { name: 'Ariful Islam Azad', state: 'Assam' },
  { name: 'Mohd Arbaz', state: 'Uttar Pradesh' },
  { name: 'Ghazia Naim', state: 'Uttar Pradesh' },
  { name: 'Muneesa', state: 'Kerala' },
  { name: 'Udoy Newar', state: 'Assam' },
  { name: 'Nandana John', state: 'Kerala' },
  { name: 'Komal kumari', state: 'Haryana' },
  { name: 'Anjali Raj', state: 'Uttar Pradesh' },
  { name: 'Sonu Kumar', state: 'Uttar Pradesh' },
  { name: 'Shazia Shabbir', state: 'Bihar' },
  { name: 'Aysha Razi', state: 'Uttar Pradesh' },
  { name: 'K.Meghana', state: 'Telangana' },
  { name: 'Vasu Rajvanshi', state: 'Uttar Pradesh' },
  { name: 'Harpreet kaur rana', state: 'Delhi' },
  { name: 'Rahul Sharma', state: 'Haryana' },
  { name: 'Radha Agarwal', state: 'Delhi' },
  { name: 'Gopal Agrawal', state: 'Uttar Pradesh' },
  { name: 'Saman', state: 'Uttar Pradesh' },
  { name: 'Hariharan T', state: 'Tamil Nadu' },
  { name: 'B. Thulasi', state: 'Tamil Nadu' },
  { name: 'Sathya pooja', state: 'Tamil Nadu' },
  { name: 'M.Mugunthan', state: 'Tamil Nadu' },
  { name: 'Gaurav Sen', state: 'Uttar Pradesh' },
  { name: 'A.Hariharan', state: 'Tamil Nadu' },
  { name: 'T.Sugappriya', state: 'Tamil Nadu' },
  { name: 'J.Aiswarya', state: 'Tamil Nadu' },
  { name: 'Durga Gayathri. K', state: 'Tamil Nadu' },
  { name: 'P.Nivetha Priya', state: 'Tamil Nadu' },
  { name: 'SADHASAKTHI. S', state: 'Tamil Nadu' },
  { name: 'V . inthuja', state: 'Tamil Nadu' },
  { name: 'Aishwarya', state: 'Tamil Nadu' },
  { name: 'K.sriharishma', state: 'Tamil Nadu' },
  { name: 'Devasri', state: 'Tamil Nadu' },
  { name: 'Mohana Priya', state: 'Tamil Nadu' },
  { name: 'Abhishek Kumar Thakur', state: 'Assam' },
  { name: 'Dr. Cathy Stern', state: 'USA' },
  { name: 'Divyanshu Soni', state: 'Rajasthan' },
  { name: 'Haziel Rynjah', state: 'Meghalaya' },
  { name: 'H. Shematee', state: 'Tamil Nadu' },
  { name: 'Sahana.S', state: 'Tamil Nadu' },
  { name: 'Debalina Dhar', state: 'West Bengal' },
  { name: 'SANTOSH KUMAR', state: 'Bihar' },
  { name: 'Jiarul Hoque', state: 'Assam' },
  { name: 'Iftikar Ahmed', state: 'Assam' },
  { name: 'Mehbub Alom Borbhuyan', state: 'Assam' },
  { name: 'Khanindra baishya', state: 'Assam' },
  { name: 'Nagma Parveen', state: 'Uttar Pradesh' },
  { name: 'Vidya Lakshmi', state: 'Kerala' },
  { name: 'Pinky gogoi', state: 'Assam' },
  { name: 'Jatin ubha', state: 'Rajasthan' },
  { name: 'Zerin Mosharath Mollah', state: 'Assam' },
  { name: 'S.Arockia Neha', state: 'Tamil Nadu' },
  { name: 'M.AYSWARYALAKSHMIPRIYA', state: 'Tamil Nadu' },
  { name: 'Pooja', state: 'Tamil Nadu' },
  { name: 'Jassi kamble', state: 'Maharashtra' },
  { name: 'Huda Ali', state: 'Uttar Pradesh' },
  { name: 'G. Abinaya', state: 'Tamil Nadu' },
  { name: 'P.JEBISHA NANCY', state: 'Tamil Nadu' },
  { name: 'Sumaiya thoufiq', state: 'Tamil Nadu' },
  { name: 'Pranita Pradhan', state: 'Sikkim' },
  { name: 'Agam Pratap', state: 'Uttar Pradesh' },
  { name: 'Gitika kumari', state: 'Bihar' },
  { name: 'Shivam palriwal', state: 'Delhi' },
  { name: 'Mohammad Anish', state: 'Rajasthan' },
  { name: 'Devendra Kumawat', state: 'Rajasthan' },
  { name: 'Raghav Manchanda', state: 'Delhi' },
  { name: 'Sajida Akhtar', state: 'Delhi' },
  { name: 'Khushi', state: 'Uttar Pradesh' },
  { name: 'mariya', state: 'Delhi' },
  { name: 'Shaheen parveen', state: 'Delhi' },
  { name: 'Tinotenda Nzvuwu', state: 'Punjab' },
];

const contestWinners: Record<string, string> = {
  ...optopreneurWinners,
  ...quizWinners
};

const governingBody: Record<string, string> = {
  'NIZAM UDDIN SK': 'Founder & Director',
  'JANARTHAN VEERAMANI': 'Director of Administration',
  'MOHD ASAD': 'Head of Academic',
  'MOHD ADNAN': 'MANAGING DIRECTOR OF NORTHERN ZONE',
  'PRITAM KARMAKAR': 'MANAGING DIRECTOR OF EASTERN ZONE',
  'ANSHI JHA': 'MANAGING DIRECTOR OF CENTRAL ZONE',
  'M. MEGA DHARSHINI': 'MANAGING DIRECTOR OF SOUTHERN ZONE',
  'MUZAHID KAMAL': 'Managing Director of Western Zone',
  'MEHETAB HUSSAIN': 'MANAGING DIRECTOR OF NORTH-EASTERN ZONE',
  'RABJOT SINGH GULATI': 'State Head, Uttar Pradesh',
  'GOPIKA V.': 'State Head, Kerala',
  'P.KAYAL VIZHI': 'State Head, Tamil Nadu',
  'SHOBANA PRIYA S.': 'State Head, Andhra Pradesh',
  'IRBAZ': 'State Head, Karnataka',
  'M.MUGUNTHAN': 'State Head, Telangana',
  'A.HARIHARAN': 'State Head, Pondicherry',
  'HAZIEL RYNJAH': 'State Head, Meghalaya',
  'ABHISEK BURAGOHAIN': 'State Head, Assam',
  'BE AN H. PHOM': 'State Head, Nagaland',
  'SHREYASI NATH': 'MODERATOR',
};

const stateToZone: Record<string, string> = {
  'Tamil Nadu': 'Southern Zone',
  'Uttar Pradesh': 'Northern Zone',
  'Assam': 'North-Eastern Zone',
  'Odisha': 'Eastern Zone',
  'Jharkhand': 'Eastern Zone',
  'Pakistan': 'International',
  'Lakhimpur Kheri': 'Northern Zone',
  'Delhi': 'Northern Zone',
  'Punjab': 'Northern Zone',
  'West Bengal': 'Eastern Zone',
  'Arunachal Pradesh': 'North-Eastern Zone',
  'Karnataka': 'Southern Zone',
  'Rajasthan': 'Western Zone',
  'Telangana': 'Southern Zone',
  'Kerala': 'Southern Zone',
  'Nagaland': 'North-Eastern Zone',
  'Meghalaya': 'North-Eastern Zone',
  'Bihar': 'Eastern Zone',
  'India': 'National',
  'Tripura': 'North-Eastern Zone',
  'Chandigarh': 'Northern Zone',
  'Himachal Pradesh': 'Northern Zone',
  'Kenya': 'International',
  'Madhya Pradesh': 'Central Zone',
  'Gujarat': 'Western Zone',
  'Haryana': 'Northern Zone',
  'Maharashtra': 'Western Zone',
  'Jammu and Kashmir': 'Northern Zone',
  'Nigeria': 'International',
  'USA': 'International',
  'Sikkim': 'North-Eastern Zone',
};

const normalizeState = (state: string): string => {
  const normalized = state.trim().toLowerCase();
  const stateMap: Record<string, string> = {
      'tamilnadu': 'Tamil Nadu',
      'uttar pradesh': 'Uttar Pradesh',
      'up': 'Uttar Pradesh',
      'u. p': 'Uttar Pradesh',
      'utaar pradesh': 'Uttar Pradesh',
      'utter pradesh': 'Uttar Pradesh',
      'uttar pardesh': 'Uttar Pradesh',
      'uttarpradesh': 'Uttar Pradesh',
      'karnataka': 'Karnataka',
      'westbengal': 'West Bengal',
      'gujarat': 'Gujarat',
      'guja': 'Gujarat',
      'bihar': 'Bihar',
      'kerala': 'Kerala',
      'jammu and kashmir': 'Jammu and Kashmir',
      'lakhimpur kheri': 'Lakhimpur Kheri'
  };
  return stateMap[normalized] || state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

const normalizeName = (name: string) => {
  return name.toUpperCase().replace(/[.\s]/g, '');
};

const generateRegNo = (state: string, index: number): string => {
  const stateCode = (state.substring(0, 2) || 'XX').toUpperCase();
  const paddedIndex = (index + 1).toString().padStart(4, '0');
  return `OB-${stateCode}-${paddedIndex}`;
};

export default function MembershipPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Member; direction: 'ascending' | 'descending' } | null>(null);

  const processedMembers: Member[] = useMemo(() => {
    let members = originalMembers.map((member, index) => {
      const normalizedState = normalizeState(member.state);
      const normalizedName = normalizeName(member.name);
      
      const memberData: Member = {
        ...member,
        state: normalizedState,
        regNo: generateRegNo(normalizedState, index),
        zone: stateToZone[normalizedState] || 'Unknown',
        role: governingBody[normalizedName],
        award: contestWinners[normalizedName],
      };
      
      return memberData;
    });

    if (sortConfig !== null) {
      members.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return members;
  }, [sortConfig]);

  const filteredMembers = useMemo(() => {
    return processedMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            member.regNo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === 'all' || member.state === selectedState;
      return matchesSearch && matchesState;
    });
  }, [processedMembers, searchTerm, selectedState]);

  const uniqueStates = useMemo(() => {
    const states = new Set(processedMembers.map(m => m.state));
    return Array.from(states).sort();
  }, [processedMembers]);

  const requestSort = (key: keyof Member) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIcon = (key: keyof Member) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="h-4 w-4 ml-2 opacity-30" />;
    }
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  const memberStatsByState = useMemo(() => {
    const counts = filteredMembers.reduce((acc, member) => {
        acc[member.state] = (acc[member.state] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 15);
  }, [filteredMembers]);

  const memberStatsByZone = useMemo(() => {
      const counts = filteredMembers.reduce((acc, member) => {
          const zone = member.zone || 'Unknown';
          acc[zone] = (acc[zone] || 0) + 1;
          return acc;
      }, {} as Record<string, number>);

      return Object.entries(counts)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value);
  }, [filteredMembers]);


  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          OPTOBHARAT Membership
        </h1>
      </section>

      <section id="how-to-join">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <UserPlus className="mr-3 h-8 w-8 text-primary" /> How to Join
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-4 md:px-6">
            <p className="text-muted-foreground text-center">
              Become a part of India&apos;s largest optometry student community! To join OPTOBHARAT, please fill out our membership registration form.
            </p>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="https://forms.gle/q4eB9tXy8cML19f89" target="_blank">
                  Go to Registration Form
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="member-list">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <ShieldCheck className="mr-3 h-8 w-8 text-primary" /> Our Members
            </CardTitle>
            <CardDescription className="text-center">
              Our community is growing every day. Find fellow members from across the country.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or Reg No..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Filter by State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {uniqueStates.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
             <p className="text-sm text-muted-foreground mb-4">
                Showing {filteredMembers.length} of {processedMembers.length} members.
            </p>

            <TooltipProvider>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="cursor-pointer" onClick={() => requestSort('regNo')}>
                        <div className="flex items-center">Reg No. {getSortIcon('regNo')}</div>
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => requestSort('name')}>
                        <div className="flex items-center">Name {getSortIcon('name')}</div>
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => requestSort('state')}>
                        <div className="flex items-center">State {getSortIcon('state')}</div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map(member => (
                      <TableRow key={member.regNo} className={(member.role || member.award) ? 'bg-primary/10' : ''}>
                        <TableCell>{member.regNo}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                             {(member.role || member.award) ? (
                                <Tooltip>
                                    <TooltipTrigger>
                                        {member.role ? <Crown className="h-4 w-4 text-yellow-600" /> : <Award className="h-4 w-4 text-blue-600" />}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{member.role || member.award}</p>
                                    </TooltipContent>
                                </Tooltip>
                             ) : null}
                            <span>{member.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{member.state}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </section>
      
      <section id="member-stats">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
                    <BarChart2 className="mr-3 h-8 w-8 text-primary" /> Member Statistics
                </CardTitle>
                <CardDescription className="text-center">
                    A visual breakdown of our community.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
                <div className="h-[400px] w-full">
                     <p className="text-center font-semibold text-foreground mb-4">Top 15 States by Member Count</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={memberStatsByState} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
                             <Tooltip
                                cursor={{ fill: 'hsl(var(--muted))' }}
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                        <div className="bg-background border p-2 rounded-md shadow-md">
                                            <p className="font-bold">{`${payload[0].payload.name}: ${payload[0].value} members`}</p>
                                        </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Bar dataKey="value" fill="hsl(var(--primary))" barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-[400px] w-full">
                    <p className="text-center font-semibold text-foreground mb-4">Members by Zone</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={memberStatsByZone} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
                             <Tooltip
                                cursor={{ fill: 'hsl(var(--muted))' }}
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                        <div className="bg-background border p-2 rounded-md shadow-md">
                                            <p className="font-bold">{`${payload[0].payload.name}: ${payload[0].value} members`}</p>
                                        </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Bar dataKey="value" fill="hsl(var(--accent))" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
      </section>

    </div>
  );
}
