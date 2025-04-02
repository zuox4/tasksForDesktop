import { KonkursValute } from './KunkursValute'
import maket from '../../assets/maket2.svg'
import { InviteComponent } from './InviteComponent'
export default function Apps() {
	return (
		<>
			<div className=' flex flex-col gap-2 '>
				<div className='w-full'>
					<img src={maket} />
				</div>
				<div className='text-xl text-white text-center font-bold mt-3 uppercase  '>
					Выполни задания и получи вступительный бонус уже сейчас!
				</div>
				<div className=''>
					<div className='flex flex-col gap-3'>
						<InviteComponent />
						<KonkursValute
							titleTask={'Дай название школьной валюте'}
							description={`Предложи название общешкольной валюте. и получи за участие ${3000} KCoins`}
							price={3000}
							status={false}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
