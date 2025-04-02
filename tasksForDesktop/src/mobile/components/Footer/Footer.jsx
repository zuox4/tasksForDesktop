import { FooterBotton } from './Footer.button'
import app from '../../assets/app.svg'
import home from '../../assets/home.svg'
import calendar from '../../assets/calendar.svg'
import profile from '../../assets/profile.svg'
import shop from '../../assets/shop.svg'
export const Footer = () => {
	return (
		<div className=' w-full flex justify-center fixed bottom-7 items-center '>
			<div className=' rounded-[40px] w-[80%] bg-white flex frex-row items-center justify-between  px-6 pb-2 pt-2 '>
				<FooterBotton path={'tasks'} icon={home} />
				<FooterBotton path={'worker-panel'} icon={calendar} />
				<FooterBotton path={'fast-bonus'} icon={app} />
				<FooterBotton path={'shop'} icon={shop} />
				<FooterBotton path={''} icon={profile} />
			</div>
		</div>
	)
}
