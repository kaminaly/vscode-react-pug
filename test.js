import React from 'react'
import SubComponent from './SubComponent'

export default (props) => pug`
  //- some comment 
  .Component
    if props.showSubComponent
      SubComponent.someClass(...props)

    ul
      for num, i in [1,2,3]
        li(key=i)= num
` // Here will be JS commnet
// Here will be JS commnet

export default (props) => {
  // Here will be JS commnet
  return pug`
    // Here will be HTML comment
    //- some comment 
    .Component
      if props.showSubComponent
        SubComponent.someClass(...props)

      ul
        for num, i in [1,2,3]
          li(key=i)= num
      
  ` // Here will be JS commnet
  // Here will be JS commnet
}

// It doesn't work...
export default (props) => pug`.Component inline test`