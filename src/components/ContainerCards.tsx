
import { useState } from "react"
import { Data, Status } from "../model/model"
import { CardItem } from "./CardItem"

interface Props {
    items: Data[]
    status: Status
    isDragging: boolean
    handleUpdateList: (id: number, status: Status) => void
    handleDragging: (dragging: boolean) => void
}

export const ContainerCards = ({ items = [], status, isDragging, handleDragging, handleUpdateList }: Props) => {
    const [hoveredStatus, setHoveredStatus] = useState<Status | null>(null)

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleUpdateList(+e.dataTransfer.getData('text'), status)
        handleDragging(false)
        setHoveredStatus(null)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => { 
        e.preventDefault() 
        setHoveredStatus(status)
    }
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => { 
        e.preventDefault() 
        setHoveredStatus(null)
    }
    
    return (
        <div
            className={`rounded transition-all duration-300 ease-linear	${isDragging ? 'border-dashed border-2 border-emerald-300' : 'border-2 border-neutral-300'} ${hoveredStatus === status && 'bg-neutral-800'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p className="rounded bg-black text-center py-4 font-bold capitalize">{status} hero</p>
            {
                items.map(item => (
                    status === item.status
                    && <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    />
                ))
            }
        </div>
    )
}