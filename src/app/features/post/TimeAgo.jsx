import { formatDistanceToNow, parseISO } from "date-fns";
import PropTypes from "prop-types"


const TimeAgo = ({timeStamp}) => {
  let timeAgo = ''
  if(timeStamp){
    const date = parseISO(timeStamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return(
    <span title = {timeStamp}>
     <i> {timeAgo}</i>
    </span>
  )
}
TimeAgo.propTypes = {
    timeStamp : PropTypes.string
}

export default TimeAgo