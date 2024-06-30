
import Skeleton from '../Skeleton'
const TitleBlock = ({title, text, loading}) => {
    return (
        <div className="flex flex-col gap-1">
            <Skeleton loading={loading} cls="bg-skelet-300 w-24 h-4">
                <h3 className="">{title}</h3>
            </Skeleton>
            <Skeleton loading={loading} cls="bg-skelet-100 w-20 h-4">
                <p className="text-xs text-second-400 dark:text-info-300 font-medium">{text}</p>
            </Skeleton>
        </div>
    )
}

export default TitleBlock