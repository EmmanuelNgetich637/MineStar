import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import { useState } from 'react'

function EmojiPicker({postId }) {
    const [emojiTable, setEmojiTable] = useState(false)
    const [emoji, setEmoji] = useState(null);


    function handleEmojiSelect(selectedEmoji) {
      const emoji = selectedEmoji.native;
    
      // Fetch the current post from the server
      fetch(`http://localhost:3000/posts/${postId}`)
        .then((res) => res.json())
        .then((postData) => {
          const currentReactions = postData.reactions || {};
    
          // Add/update the emoji count
          const updatedReactions = {
            ...currentReactions,
            [emoji]: (currentReactions[emoji] || 0) + 1,
          };
    
          // Send PATCH with the updated full reactions
          return fetch(`http://localhost:3000/posts/${postId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reactions: updatedReactions }),
          });
        })
        .then((res) => res.json())
        .then(() => {
          setEmoji(emoji)
          setEmojiTable(false);
        })
        .catch((error) => {
          console.error("Failed to update emoji reaction:", error)
        });
    }
    
  return (
    <button onClick={() => setEmojiTable(!emojiTable)}>
      {emojiTable ? <Picker data={data} onEmojiSelect={handleEmojiSelect} /> : emoji || "😊"}
    </button>

  )
}
export default EmojiPicker
