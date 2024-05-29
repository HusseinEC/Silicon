'use client'

interface AddBookmarkBtnProps {
  itemId: string
}

export default function AddBookmarkBtn({itemId}:AddBookmarkBtnProps) {
    return (
      <button onClick={() => console.log(itemId)} className="btn btn-circle bookmark"><i className="fa-regular fa-bookmark"></i></button>
    );
  }
  