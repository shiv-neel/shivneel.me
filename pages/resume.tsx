import React from 'react'
import Head from 'next/head'
import { Box, Button, Divider, Heading, Link } from '@chakra-ui/react'
import { FaDownload } from 'react-icons/fa'
import { experienceData } from '../experience_data'
import ExperienceCard from '../components/card/ExperienceCard'
import { TbPointFilled } from 'react-icons/tb'

const Resume = () => {
	return (
		<>
			<Head>
				<title>Resume</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box>
				<p className='text-4xl font-bold mb-6'>Resume</p>
				<Link href='https://www.overleaf.com/read/vzgkkknbkhqg' target='_blank'>
					<Button
						className='flex gap-7 items-center w-60 h-20'
						colorScheme='whiteAlpha'
					>
						<FaDownload className='bg-transparent text-white' />
						<p className='text-white bg-transparent'>Download PDF</p>
					</Button>
				</Link>
				<Box>
					<Box className='mt-10'>
						<p className='text-3xl my-10 font-bold'>Education</p>
						<Box>
							<Box className='flex items-center gap-10 w-full'>
								<p className='text-2xl font-semibold mb-5'>
									Iowa State University
								</p>
							</Box>

							<p className='text-lg font-semibold mb-2'>
								Bachelor of Science in Computer Science
							</p>
							<p className='mb-2 flex justify-between'>
								<p className='text-gray-500'>Aug 2019 - Dec 2023</p>
								<p className='text-gray-500'>Ames, IA</p>
							</p>
							<p className='text-sm leading-relaxed'>
								<>
									{' '}
									<li>
										<strong>GPA:</strong> 3.72/4.00
									</li>
									<li>
										<strong>Minors:</strong> Data Science
									</li>
									<li>
										<strong>Certifications:</strong> AWS Certified Cloud
										Practitioner
									</li>
									<li>
										<strong>Honors:</strong> Summa Cum Laude, Dean&apos;s List
									</li>
								</>
							</p>
						</Box>
					</Box>
					<Box>
						<p className='text-3xl my-10 font-bold'>Experience</p>
						<Box>
							{experienceData.map((xp, index) => (
								<ExperienceCard key={index} {...xp} />
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Resume
