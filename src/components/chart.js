import _                            from 'lodash'
import React                        from 'react'
import { Sparklines, 
         SparklinesLine, 
         SparklinesReferenceLine }  from 'react-sparklines'

const average = (array) => {
    return _.round(_.sum(array)/array.length)
}

const Chart = (props) => {
    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={ props.data }>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>{ average(props.data) } { props.unit }</div>
        </div>
    )
}

export { Chart }