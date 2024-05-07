import { TSavedIcon } from "./types/types"
import './styles.scss'

export const SavedIcon = ({status='unsaved'}:TSavedIcon) => {
    return (
    <div className="icon">
    <svg className="heart" style={{margin:'12px'}} width="27" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12ZM3.75 1.5C2.5095 1.5 1.5 2.5095 1.5 3.75C1.5 6.27225 4.98225 9.15527 6.75 10.3545C8.51775 9.15527 12 6.273 12 3.75C12 2.5095 10.9905 1.5 9.75 1.5C8.48325 1.5 7.5 2.70975 7.5 3.75C7.5 4.164 7.164 4.5 6.75 4.5C6.336 4.5 6 4.164 6 3.75C6 2.70975 5.01675 1.5 3.75 1.5Z" fill={status === 'disabled' ?"#D9D9D9" : "black"}/>
    </svg>                

    <svg className="heart--fill" width="27" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_46_517)">
<path d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12Z" fill={status === 'saved' ? '#240C86' : '#4F2CD9'}/>
</g>
<defs>
<clipPath id="clip0_46_517">
<rect width="13.5" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
  </div>

    )
}