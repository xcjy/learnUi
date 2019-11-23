import React from 'react'
import  './importAllIcons.js'
import './icon.scss'
import classes from '../helpers/classnames'

// 接口是限制对象里有什么  而JSX翻译过来的参数为 ｛｝的形式 所以可以显示参数类型
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon:React.FunctionComponent<IconProps> =
    ({className,name,...restProps})=>{
    return(
        <svg className={ classes( 'learnUi-icon', className)}
           {...restProps}
         
         >
            <use xlinkHref={`#${name}`} ></use>
        </svg>

    )
}

export default Icon