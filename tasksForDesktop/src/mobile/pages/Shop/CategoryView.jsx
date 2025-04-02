export function CategoryView({
	id,
	title,
	iconUrl,
	setCategoryFilter,
	categoryFilter,
}) {
	return (
		<div
			onClick={() => setCategoryFilter({ id: id, title: title })}
			className='flex flex-col items-center gap-1 w-20 '
		>
			<div
				className={`h-20 w-20 bg-${
					categoryFilter === id ? 'blue' : 'white'
				} rounded-2xl flex items-center justify-between p-2`}
			>
				<img src={iconUrl} alt='' />
			</div>
			<span className='w-20 text-center text-main truncate ...'>{title}</span>
		</div>
	)
}
