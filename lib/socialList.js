import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const contactList = [
	{
		label: 'Twitter',
		icon: <FaTwitter />,
		href: 'https://twitter.com/PermaFun',
	},
	{
		label: 'LinkedIn',
		icon: <FaLinkedin />,
		href: 'https://www.linkedin.com/in/matthew-littrell-886066111/',
	},
	{
		label: 'Email',
		icon: <HiOutlineMail />,
		href: 'mailto:matthew@mattlittrell.dev',
	},
];

export default contactList;
