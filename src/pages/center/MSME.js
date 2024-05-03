import React from 'react';
import Heading from '../../components/Heading';
import BaseTable from '../BaseTable';

const table = {
  Title: "Journal Publications",
  thead: ["Department", "Course Name", "Course Coordinator" , "Duration","No. of Students","Link"],
  feild:["Department", "Course Name", "Course Coordinator" , "Duration","No. of Students","Link"],
}

const data = [
  {
    'S.No': '1',
    'Department': 'Humanities and Management',
    'Course Name': 'Advanced MDP/Management of Startups and Business',
    'Course Coordinator': 'Dr. Gaurav Kumar',
    'Duration': '12 Feb 2024 - Feb 16 2024',
    'No. of Students': '25',
    'Link': '',
  },
  {
    'S.No': '2',
    'Department': 'Humanities and Management',
    'Course Name': 'Advanced MDP/Finance for Non-Finance',
    'Course Coordinator': 'Dr. Gaurav Kumar',
    'Duration':'29 Jan 2024 - Feb 2 2024',
    'No. of Students': '25',
    'Link': '',
  },
  {
    'S.No': '3',
    'Department': 'Chemistry',
    'Course Name': 'Advanced E-SDP/ Skill Development in Post Harvest Technology and Natural Farming for Unemployed Youth',
    'Course Coordinator': 'Dr. Rajeev Jindal',
    'Duration': '29 Jan 2024 - 03 Feb 2024',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '4',
    'Department': 'Industrial and Production Engineering',
    'Course Name': 'Advanced MDP/Productivity Enhancement Soft Tools for MSMEs Managers/Owners',
    'Course Coordinator': 'Dr. Arvind Bhardwaj',
    'Duration': '25 Jan 2024 - 30 January 2024',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '5',
    'Department': 'Chemical Engineering',
    'Course Name': 'Advanced E-SDP/Opportunities for MSMEs in Solid Waste Management',
    'Course Coordinator': 'Dr. Anjireddy Bhavanam',
    'Duration': '27 Nov 2023 - 01 Dec 2023',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '6',
    'Department': 'Electrical Engineering',
    'Course Name': 'Advanced E-SDP/ Installation and Commissioning of Solar Plants for Net Zero Energy Buildings',
    'Course Coordinator': 'Dr. Kailash Chand Sharma',
    'Duration': '07 December 2023 - 11 December 2023',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '7',
    'Department': 'Instrumentation and Control Engineering',
    'Course Name': 'Advanced E-SDP/ Recent Trends Challenges in Instrumentation and Control for MSME Industry',
    'Course Coordinator': 'Dr. Karan Veer',
    'Duration': '04 Dec 2023 - 08 Dec 2023',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '8',
    'Department': 'Industrial and Production Engineering',
    'Course Name': 'Advanced E-SDP/ Additive Manufacturing of Polymers Scope of Entrepreneurship',
    'Course Coordinator': 'Dr. Kapil Kumar',
    'Duration': '16 Dec 2023 - 20 Dec 2023',
    'No. of Students': '25',
    'Link': '',
  }
];

function MSME() {
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
      <Heading name="MSME" />
      
      <BaseTable tablehead={table.thead} feild={table.feild} data={data}/>
    </div>
  );
}

export default MSME;