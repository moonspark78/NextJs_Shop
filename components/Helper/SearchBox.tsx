import React from 'react'
import { Dialog ,DialogTrigger } from '../ui/dialog'
import { SearchIcon } from 'lucide-react'

const SearchBox = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={"pointer"}/>
        </DialogTrigger>
    </Dialog>
  )
}

export default SearchBox