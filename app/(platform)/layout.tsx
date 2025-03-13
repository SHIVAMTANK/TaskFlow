import {
  ClerkProvider,
  
} from '@clerk/nextjs'

const PlatformLayout = ({children}:{
    children:React.ReactNode
})=>{
    return(
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default PlatformLayout;
//kem ke front page par login ni jarur nathi
//platform page par j login ni jarur che so
//aaj layout protected hovu joye
