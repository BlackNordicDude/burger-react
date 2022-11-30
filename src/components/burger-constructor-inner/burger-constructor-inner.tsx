import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { FC, useRef } from "react";
import style from '../burger-constructor/burger-constructor.module.css';
import { IPropsInnerItem } from "../../utils/types";
 

export const InnerItem: FC<IPropsInnerItem> = ({ children, index, moveItem }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag({
        type: 'sort-item',
        item: () => {
            return { index }
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
    })
    const [, drop] = useDrop({
        accept: 'sort-item',
        hover(item: any, monitor: DropTargetMonitor) {
        if (!ref.current) {
            return
        }
        const dragIndex = item.index
        const hoverIndex = index
        if (dragIndex === hoverIndex) {
            return
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset !== null ? clientOffset.y - hoverBoundingRect.top : 0
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        moveItem(dragIndex, hoverIndex)
        item.index = hoverIndex
        },
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref));
    return (
        <div ref={ref} className={style.in_burger_elem} style={{opacity}}>
            {children}
        </div>
    )
}