import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  bottom,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  top,
  width
} from 'styled-system'
import tag from 'clean-tag'

const Box = styled(tag)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${background}
  ${border}
  ${borderBottom}
  ${borderLeft}
  ${borderRadius}
  ${borderRight}
  ${borderTop}
  ${bottom}
  ${color}
  ${display}
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${lineHeight}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${overflow}
  ${position}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
`

Box.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...background.propTypes,
  ...border.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
  ...borderRadius.propTypes,
  ...borderRight.propTypes,
  ...borderTop.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...opacity.propTypes,
  ...order.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes
}

export default Box
