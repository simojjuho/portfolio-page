//interface CarouselProps {}

import { useState } from "react"

const Carousel = () => {
    const [currentIndex, setIndex] = useState<number>(0)
    const [elements, setElements] = useState<string[]>(['1', '2', '3', '4', '5'])

    const nextIndex = () => {
        const newIndex = currentIndex + 1
        setIndex(newIndex >= elements.length ? 0 : newIndex)
    }
    const previousIndex = () => {
        const newIndex = currentIndex - 1
        setIndex(newIndex < 0 ? elements.length - 1 : newIndex)
    }

    const carouselContainerStyle = {
        'backgroundColor': '#f1f1f1',
        'display': 'flex',
        'flex-wrap': 'nowrap',
        'overflow': 'hidden'
    }

    const carouselItemStyle = {
        'height': '20rem',
        'min-width': '100%',
        'width': '100%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'transition': '1s cubic-bezier(0.39, 0.575, 0.565, 1',
        'transform': `translate(-${currentIndex * 100}%)`
    }

    return (
        <div>
            <div className="" style={carouselContainerStyle}>
                {elements.map((item, index) => {
                    return <h1 
                        style={carouselItemStyle}
                        key={index}>{item}</h1>
                })}
            </div>
            <button onClick={previousIndex}>Previous</button>
            <button onClick={nextIndex}>Next</button>
        </div>
    )
}

export default Carousel