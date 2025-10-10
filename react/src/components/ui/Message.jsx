
function Message({ text, type = 'info'}){
    if (!text) return null
    
    return (
        <div className={`message message-${type}`}>
            {text}
        </div>
    )
}

export default Message