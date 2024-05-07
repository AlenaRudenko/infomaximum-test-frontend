import { COLORS } from "../../../constants/colors"

export const SavedIconFilled = () => {
    return (
        <svg style={{margin:'12px'}} width="27" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_46_517)">
<path d="M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12Z" fill={status === 'saved' ? '#240C86' : '#4F2CD9'}/>
</g>
<defs>
<clipPath id="clip0_46_517">
<rect width="13.5" height="12" fill={COLORS.BLUE2}/>
</clipPath>
</defs>
</svg>
    )
}