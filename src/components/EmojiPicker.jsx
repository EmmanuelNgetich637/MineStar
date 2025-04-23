import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

function EmojiPicker() {
  return (
    <Picker
      data={data}
      onEmojiSelect={(emoji) => console.log(emoji)}
    />
  )
}
export default EmojiPicker