import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import { useState } from 'react'

function EmojiPicker({postId, currentReactions={}}) {
    const [emojiTable, setEmojiTable] = useState(false)

    function handleEmojiSelect(selectedEmoji){
        const emoji = selectedEmoji.native 
        const updatedReactions = {
            ...currentReactions, [emoji]: (currentReactions[emoji] || 0) + 1,
        }

        fetch(`http://localhost:3000/posts/${postId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reactions: updatedReactions }),
          })
        }

  return (
    <button onClick={()=> setEmojiTable(!emojiTable)}> {emojiTable ? <Picker data={data} onEmojiSelect={handleEmojiSelect}/> : "😊"}</button>

  )
}
export default EmojiPicker
