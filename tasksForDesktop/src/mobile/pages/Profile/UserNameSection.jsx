export const UserNameSection = ({ parts }) => (
	<section className='font-custom text-white text-[28px] font-bold w-full uppercase leading-9'>
		{parts.map((part, index) => (
			<div key={index} className='name-part'>
				{part}
			</div>
		))}
	</section>
)
