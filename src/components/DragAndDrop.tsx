
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { data } from "../mocks/data"
import { Status } from "../model/model"
import { ContainerCards } from "./ContainerCards"


const types: Status[] = ['good', 'normal', 'bad']


export const DragAndDrop = () => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

    return (
        <div className="container-main w-full grid gap-2 grid-cols-3 grow shrink px-4">
            {
                types.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}