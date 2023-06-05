import Head from 'next/head'
import { Box, Button, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import { BsGithub, BsLinkedin, BsSpotify } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export default function Home() {
	return (
		<>
			<Head>
				<title>Shiva Neelakantan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<p className='text-4xl font-bold mb-6'>Shiva Neelakantan</p>
			<p className='mt-12 leading-relaxed text-sm'>
				Hey there, I&apos;m Shiv. <br />
				<br />
				Through actively learning how to appreciate the technology around me,
				I&apos;ve come to better understand myself.
				<br />
				<br />
				I&apos;m a Full-stack Software Engineer based in Chicagoland, aspiring
				to execute ideas that advance my community and those I love.
			</p>
			<Box className=''>
				<Box className='flex text-4xl space-x-10 mt-16 items-center'>
					<Link href='https://github.com/shiv-neel' target='_blank'>
						<BsGithub className='hover:scale-110 hover:cursor-pointer duration-100 text-green-500' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/shiva-neelakantan/'
						target='_blank'
					>
						<BsLinkedin className='hover:scale-110 hover:cursor-pointer duration-100 text-blue-600' />
					</Link>
					<Link href='mailto:shiv.neel1622@gmail.com'>
						<SiGmail className='hover:scale-110 hover:cursor-pointer duration-100 text-red-500' />
					</Link>
				</Box>
			</Box>
		</>
	)
}
