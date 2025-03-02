import styles from './TaskItem.module.css'
export const HashTagsTask = ({heashTags}) =>{
    return(
        <div className={styles.hashtagsconteiner}>
            {
                heashTags.map(tag=><span>#{tag}</span>)
            }

        </div>
    )
}