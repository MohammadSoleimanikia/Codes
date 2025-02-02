export default function TabButton({children,isSelected,...props}){
    return <li><button className={isSelected?'active':''} {...props}>{children}</button></li>;
}   