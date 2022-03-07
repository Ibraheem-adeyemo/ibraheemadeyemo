import { CircularProgress } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FC } from "react"
import useSWR from "swr"
import { appear, apperWithDimensions, delayChildren, staggerChildrenWithDuration } from "../../animations"
import { Images } from "../../constants"
import { APIResponse } from "../../models"
import { AnimatedText, MotionFlex, MotionImage } from "../framer"

interface ActivateAccountProps {
    activationCode: string
}

const ActivateAccount: FC<ActivateAccountProps> = (props: ActivateAccountProps) => {
    const router = useRouter()

    const { data, error } = useSWR<APIResponse<any>>(props.activationCode ? "" : null)


    return (
        <MotionFlex sx={{
            flexDir: "column",
            gap: "55px"
        }}
            initial="hide"
            animate="show"
            variants={delayChildren}>
            <MotionImage src={Images.onboardingSuccess} boxSize="134px" animate="show" initial="hide" variants={apperWithDimensions({ width: "134px", height: "134px" })} />
            <MotionFlex sx={{
                flexDir: "column",
                gap: "20px"
            }}
                variants={delayChildren}>
                <AnimatedText variant="card-header" size="card-header">Account Activation Complete</AnimatedText>
                <AnimatedText variant="">Your Account has been activated successfully</AnimatedText>
            </MotionFlex>

            {!data && !error && <MotionFlex sx={{
                height: "100vh"
            }}
                initial="hide"
                animate="show"
                variants={appear}
            >
                <CircularProgress isIndeterminate color="brand.primary-blue" size="120px" sx={{
                    margin: "auto"
                }}
                />
            </MotionFlex>}
        </MotionFlex>
    )
}

export default ActivateAccount