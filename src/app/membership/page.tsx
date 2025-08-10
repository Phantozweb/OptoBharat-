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
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";


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
  { name: 'Anshi jha', state: 'Uttar pradesh' },
  { name: 'Jay Kumar', state: 'Rajasthan' },
  { name: 'SHEEBA', state: 'Uttar Pradesh' },
  { name: 'Delina Chyrmang', state: 'Meghalaya' },
  { name: 'Mohd Junaid', state: 'Uttar Pradesh' },
  { name: 'Rehan Ahamad.', state: 'Uttar pradesh' },
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
  { name: 'Mohd Sakib', state: 'Uttar pradesh' },
  { name: 'Navjot singh', state: 'Uttarpradesh' },
  { name: 'Ayaz Raza', state: 'Bihar' },
  { name: 'DANISH NAWAZ', state: 'Bihar' },
  { name: 'MOHD Raqib', state: 'Uttar Pradesh' },
  { name: 'FASNA EK', state: 'Kerala' },
  { name: 'Md zeeshan ali', state: 'Bihar' },
  { name: 'Anshika singh', state: 'Bihar' },
  { name: 'Shagufi', state: 'Uttar Pradesh' },
  { name: 'Sareesh khan', state: 'Uttar pradesh' },
  { name: 'Ayush Sharma', state: 'Himachal Pradesh' },
  { name: 'Jasmine', state: 'Rajasthan' },
  { name: 'Tabassum parween', state: 'Bihar' },
  { name: 'Optom K P Singh Patel', state: 'Uttar Pradesh' },
  { name: 'Tayyaba saifi', state: 'Uttar pradesh' },
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
  { name: 'Rishav raj kashyap', state: 'Uttarpradesh' },
  { name: 'Anika Pandey', state: 'Uttar pradesh' },
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
  { name: 'Gopal Agrawal', state: 'Uttarpradesh' },
  { name: 'Saman', state: 'Uttar Pradesh' },
  { name: 'Hariharan T', state: 'Tamil Nadu' },
  { name: 'B. Thulasi', state: 'Tamil Nadu' },
  { name: 'Sathya pooja', state: 'Tamil Nadu' },
  { name: 'M.Mugunthan', state: 'Tamil Nadu' },
  { name: 'Gaurav Sen', state: 'Uttar pradesh' },
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

const governingBody = {
  'NIZAM UDDIN SK': 'Founder & Director',
  'JANARTHAN VEERAMANI': 'Director of Administration',
  'MOHD ASAD': 'Head of Academic',
  'MOHD ADNAN': 'MANAGING DIRECTOR OF NORTHERN ZONE',
  'PRITAM KARMAKAR': 'MANAGING DIRECTOR OF EASTERN ZONE',
  'ANSHI JHA': 'MANAGING DIRECTOR OF CENTRAL ZONE',
  'M. Mega Dharshini': 'MANAGING DIRECTOR OF SOUTHERN ZONE',
  'M.MEGA DHARSHINI': 'MANAGING DIRECTOR OF SOUTHERN ZONE',
  'MUZAHID KAMAL': 'Managing Director of Western Zone',
  'MEHETAB HUSSAIN': 'MANAGING DIRECTOR OF NORTH-EASTERN ZONE',
  'SHREYASI NATH': 'MODERATOR',
  'Rabjot Singh Gulati': 'State Head (Uttar Pradesh)',
  'Gopika V.': 'State Head (Kerala)',
  'GOPIKA. V': 'State Head (Kerala)',
  'P.Kayal Vizhi': 'State Head (Tamil Nadu)',
  'P.KAYAL VIZHI': 'State Head (Tamil Nadu)',
  'Shobana Priya S.': 'State Head (Andhra Pradesh)',
  'SHOBANA PRIYA .S': 'State Head (Andhra Pradesh)',
  'Irbaz': 'State Head (Karnataka)',
  'Mugunthan': 'State Head (Telangana)',
  'M.MUGUNTHAN': 'State Head (Telangana)',
  'Hariharn': 'State Head (Pondicherry)',
  'A.HARIHARAN': 'State Head (Pondicherry)',
  'Haziel Rynjah': 'State Head (Meghalaya)',
  'Abhisek Buragohain': 'State Head (Assam)',
  'ABHISEK BURAGOHAIN': 'State Head (Assam)',
  'Be An H. Phom': 'State Head (Nagaland)',
  'BE-AN.H.PHOM': 'State Head (Nagaland)',
};

const contestWinners = {
    'Sreesandhiya G': '1st Place, Optopreneur 2025',
    'SREESANDHIYA.G': '1st Place, Optopreneur 2025',
    'Anik Dingal': '2nd Place, Optopreneur 2025',
    'Mohd Khalid': '3rd Place, Optopreneur 2025',
};

const normalizeState = (state: string) => {
    const s = state.toLowerCase().replace(/\./g, '').trim();
    if (s.startsWith('tamil')) return 'Tamil Nadu';
    if (s.startsWith('uttar') || s === 'up' || s === 'u p' || s === 'u. p' || s === 'utar prdesh' || s === 'sageer alam' || s === 'uttar pardesh') return 'Uttar Pradesh';
    if (s.startsWith('west')) return 'West Bengal';
    if (s === 'lakhimpur kheri') return 'Uttar Pradesh'; // Map specific location to state
    if (s === 'guja') return 'Gujarat';
    return state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();
};

const stateToZone: { [key: string]: string } = {
  // North
  'Jammu and Kashmir': 'Northern Zone',
  'Punjab': 'Northern Zone',
  'Haryana': 'Northern Zone',
  'Himachal Pradesh': 'Northern Zone',
  'Delhi': 'Northern Zone',
  'Chandigarh': 'Northern Zone',

  // Central
  'Uttar Pradesh': 'Central Zone',
  'Madhya Pradesh': 'Central Zone',

  // East
  'West Bengal': 'Eastern Zone',
  'Bihar': 'Eastern Zone',
  'Jharkhand': 'Eastern Zone',
  'Odisha': 'Eastern Zone',

  // West
  'Rajasthan': 'Western Zone',
  'Gujarat': 'Western Zone',
  'Maharashtra': 'Western Zone',

  // South
  'Tamil Nadu': 'Southern Zone',
  'Karnataka': 'Southern Zone',
  'Kerala': 'Southern Zone',
  'Telangana': 'Southern Zone',
  'Andhra Pradesh': 'Southern Zone',
  'Pondicherry': 'Southern Zone',

  // North-East
  'Assam': 'North-Eastern Zone',
  'Arunachal Pradesh': 'North-Eastern Zone',
  'Nagaland': 'North-Eastern Zone',
  'Meghalaya': 'North-Eastern Zone',
  'Tripura': 'North-Eastern Zone',
  'Sikkim': 'North-Eastern Zone',
  
  // International / Other
  'Pakistan': 'International',
  'Kenya': 'International',
  'Nigeria': 'International',
  'USA': 'International',
  'India': 'Uncategorized',
};


const generateRegNo = (state: string, index: number) => {
    const stateCode = (state.substring(0, 2).toUpperCase());
    const paddedIndex = String(index + 1).padStart(4, '0');
    return `OB-${stateCode}-${paddedIndex}`;
};

const processedMembers: Member[] = originalMembers.map((member, index) => {
    const normalizedName = member.name.toUpperCase().replace(/\s\.|[^\w\s]/gi, '').replace(/\s+/g, ' ').trim();
    const simpleName = member.name.replace(/\s\./g, '.').trim();
    const state = normalizeState(member.state);
    
    const roleKey = Object.keys(governingBody).find(key => key.toUpperCase() === normalizedName);
    const awardKey = Object.keys(contestWinners).find(key => key.toUpperCase() === normalizedName);

    return {
        ...member,
        name: simpleName,
        state,
        regNo: generateRegNo(state, index),
        role: roleKey ? governingBody[roleKey as keyof typeof governingBody] : undefined,
        award: awardKey ? contestWinners[awardKey as keyof typeof contestWinners] : undefined,
        zone: stateToZone[state] || 'Uncategorized',
    };
});

export default function MembershipPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Member; direction: 'ascending' | 'descending' } | null>(null);
  const [stateFilter, setStateFilter] = useState<string>('all');
  
  const allStates = useMemo(() => ['all', ...Array.from(new Set(processedMembers.map(m => m.state))).sort()], []);

  const sortedAndFilteredMembers = useMemo(() => {
    let filtered = [...processedMembers];

    if (stateFilter !== 'all') {
      filtered = filtered.filter(member => member.state === stateFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.regNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        const valA = a[sortConfig.key] || '';
        const valB = b[sortConfig.key] || '';
        if (valA < valB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, sortConfig, stateFilter]);

  const memberStats = useMemo(() => {
    const stateCounts: { [key: string]: number } = {};
    const zoneCounts: { [key: string]: number } = {};

    processedMembers.forEach(member => {
      // State count
      stateCounts[member.state] = (stateCounts[member.state] || 0) + 1;
      // Zone count
      if(member.zone) {
        zoneCounts[member.zone] = (zoneCounts[member.zone] || 0) + 1;
      }
    });

    const stateData = Object.entries(stateCounts)
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);
      
    const zoneData = Object.entries(zoneCounts)
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    return { stateData, zoneData };
  }, []);

  const requestSort = (key: keyof Member) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof Member) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />;
    }
    return sortConfig.direction === 'ascending' 
        ? <ArrowUpDown className="ml-2 h-4 w-4" /> // Replace with ArrowUpIcon if available
        : <ArrowUpDown className="ml-2 h-4 w-4" />; // Replace with ArrowDownIcon if available
  };

  return (
    <div className="space-y-16 md:space-y-20">
       <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <UserPlus className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          MEMBERSHIP <span className="text-primary">OPTOBHARAT</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join India's largest optometry student community and unlock a world of opportunities.
        </p>
      </section>

      <section id="benefits">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">BENEFITS OF OPTOBHARAT MEMBERSHIP</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p>
              By joining OPTOBHARAT, you gain access to an exclusive community of optometry students across India, dedicated to learning, collaboration, and professional growth. Enjoy access to educational resources, networking opportunities, career guidance, and mentorship from experienced professionals. Connect with peers, mentors, and industry leaders to strengthen your academic foundation and prepare for a successful career in eye care. As a member, you’ll also get early access to exclusive webinars, workshops, and career-enhancing opportunities designed to empower the next generation of optometrists.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="how-to-join">
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center text-primary">How to Join</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-6 text-muted-foreground px-4 md:px-6">
            <p className="text-center">
              Ready to be part of India’s first and largest optometry student community?
            </p>
            <p className="text-center">
              Simply fill out our membership form to unlock these exclusive benefits and connect with like-minded optometry students passionate about shaping the future of eye care.
            </p>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="https://forms.gle/J47RgFwMQ5VXUmKY7" target="_blank" rel="noopener noreferrer">
                  Fill Membership Form
                </Link>
              </Button>
            </div>
            <p className="text-center font-semibold text-foreground">
              First, you need to fill out the membership form to become eligible to join the WhatsApp community group. Otherwise, we won't be able to grant you access.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="our-members">
        <Card className="shadow-lg">
          <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl font-headline text-primary">Our Members</CardTitle>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                 <div className="relative w-full sm:w-auto sm:flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search members, states, or RegNo..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <Select value={stateFilter} onValueChange={setStateFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by State" />
                    </SelectTrigger>
                    <SelectContent>
                        {allStates.map(state => (
                           <SelectItem key={state} value={state}>{state === 'all' ? 'All States' : state}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Showing <span className="font-bold text-foreground">{sortedAndFilteredMembers.length}</span> of <span className="font-bold text-foreground">{processedMembers.length}</span> members.
              </p>
          </CardHeader>
          <CardContent className="p-0">
             <TooltipProvider>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                           <Button variant="ghost" onClick={() => requestSort('regNo')}>
                                Reg No.
                                {getSortIcon('regNo')}
                           </Button>
                        </TableHead>
                        <TableHead>
                           <Button variant="ghost" onClick={() => requestSort('name')}>
                                Member Name
                                {getSortIcon('name')}
                            </Button>
                        </TableHead>
                        <TableHead>
                           <Button variant="ghost" onClick={() => requestSort('state')}>
                                State
                                {getSortIcon('state')}
                            </Button>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedAndFilteredMembers.map((member) => {
                        const isSpecial = member.role || member.award;
                        const tooltipContent = member.role || member.award;
                        const highlightClass = member.role ? 'bg-primary/10' : 'bg-amber-400/10';

                        return (
                          <TableRow key={member.regNo} className={isSpecial ? highlightClass : ''}>
                            <TableCell className="font-mono text-xs">{member.regNo}</TableCell>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {member.name}
                                {isSpecial && (
                                  <Tooltip>
                                    <TooltipTrigger>
                                        {member.role ? <Crown className="h-4 w-4 text-primary" /> : <Award className="h-4 w-4 text-amber-500" />}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{tooltipContent}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{member.state}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                  {sortedAndFilteredMembers.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No members found.</p>
                  )}
                </div>
             </TooltipProvider>
          </CardContent>
        </Card>
      </section>

      <section id="member-statistics">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart2 className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl font-headline text-primary">Member Statistics</CardTitle>
            </div>
            <CardDescription>A visual breakdown of our community members.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <TooltipProvider>
              <div>
                <h3 className="text-xl font-semibold text-center mb-4">Members by State</h3>
                <div className="w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={memberStats.stateData} layout="vertical" margin={{ left: 20, right: 20 }}>
                      <XAxis type="number" hide />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={100} 
                        tickLine={false} 
                        axisLine={false} 
                        fontSize={12}
                      />
                      <RechartsTooltip
                        cursor={{ fill: 'hsl(var(--muted))' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <p className="font-bold">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="total" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
               <div>
                <h3 className="text-xl font-semibold text-center mb-4">Members by Zone</h3>
                <div className="w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={memberStats.zoneData} layout="vertical" margin={{ left: 20, right: 20 }}>
                      <XAxis type="number" hide />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={100} 
                        tickLine={false} 
                        axisLine={false} 
                        fontSize={12}
                      />
                      <RechartsTooltip
                        cursor={{ fill: 'hsl(var(--muted))' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <p className="font-bold">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="total" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </section>

      <section id="privacy-policy">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline text-center">Privacy & Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-base text-muted-foreground text-center px-4 md:px-6">
            <p>
              At OPTOBHARAT, we prioritize your privacy. We are committed to safeguarding your personal information and ensuring a secure experience within our community. We do not send spam, nor do we sell or share user data with third parties. Your trust is our responsibility.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
