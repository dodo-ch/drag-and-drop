import { Data } from "../model/model"


interface Props {
    data: Data,
    handleDragging: (dragging: boolean) => void
}

export const CardItem = ({ data, handleDragging }: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    return (
        <div
            className='animate-fadeIn cursor-pointer m-4 bg-emerald-500 rounded p-4'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p className="font-bold text-2xl">{data.content}</p>
        </div>
    )
}