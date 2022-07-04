import arrow from './arrow-fat-up.svg'
import arrowFill from './arrow-fat-up-fill.svg'
import bookmark from './bookmark.svg'
import bookmarkFill from './bookmark-fill.svg'
import chat from './chat-circle-text.svg'
import chatFill from './chat-circle-text-fill.svg'
import filePlus from './file-plus.svg'
import filePlusFill from './file-plus-fill.svg'
import house from './house.svg'
import houseFill from './house-fill.svg'
import plus from './plus.svg'
import plusFill from './plus-fill.svg'
import save from './floppy-disk-back.svg'
import saveFill from './floppy-disk-back-fill.svg'
import xCircle from './x-circle.svg'
import xCircleFill from './x-circle-fill.svg'
import { getIconFamilies } from '../utils/icon-helpers.js'

const icons = {
    arrow,
    arrowFill,
    bookmark,
    bookmarkFill,
    chat,
    chatFill,
    filePlus,
    filePlusFill,
    house,
    houseFill,
    plus,
    plusFill,
    save,
    saveFill,
    xCircle,
    xCircleFill,
}

const types = { fill: 'Fill' }

export default getIconFamilies(icons, types)
