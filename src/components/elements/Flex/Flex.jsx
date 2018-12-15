import { withProps } from 'recompose'
import Box from '../Box'

const Flex = withProps(props => ({ ...props, display: 'flex' }))(Box)

export default Flex
