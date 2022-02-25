
import NextLink from 'next/link'
import { Image, Text, Button, Flex, Link } from "@chakra-ui/react";
import React, { FC, useContext, useEffect } from "react";
import { cookieKeys, cookiesTimeout, Images, links } from "../../constants";
import { AuthContext } from "../../provider/auth-provider";
import { setCookie } from "../../lib";
import { MotionFlex } from '../framer/motion-flex';
import { MotionBox } from '../framer/motion-box';
import { MotionImage } from '../framer/motion-image';

const LoginForm: FC = () => {
    const { user, signIn, signOut } = useContext(AuthContext)

    useEffect(() => {

        if (typeof window !== "undefined") {
            setCookie(cookieKeys.token, "", cookiesTimeout.timeoutCookie)
        }
    }, [])

    return (
        <form method="POST" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            signIn()
        }} >
            <MotionFlex sx={{
                flexDir: "column",
                gridGap: "20px",
                px: "66px",
                bg: "white",
                borderRadius: "6px",
                alignItems: "center",
                w: "633px",
                py: "42.34px"
            }}
                initial="hide"
                animate="show"
                variants={{
                    show: {
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            when: "beforeChildren",
                            staggerChildren: 0.5
                        }
                    },
                    hide: {
                        opacity: 0,
                        transition: {
                            when: "afterChildren"
                        }
                    }
                }}
            >
                <MotionBox
                    sx={{
                        overflow: "hidden",
                        display: "inline-block"
                    }}

                    animate="show"
                    initial="hide"
                    variants={{
                        show: {
                            transition: {
                                when: "beforeChildren",
                                staggerChildren: 0.5
                            }
                        },
                        hide: {
                            transition: {
                                when: "afterChildren"
                            }
                        }
                    }}
                >
                    <MotionBox
                        sx={{
                            display: "inline-block"
                        }}
                        initial="hide"
                        animate="show"
                        variants={{
                            show: {
                                y: 0,
                                transition: { duration: 0.85 }
                            },
                            hide: {
                                y: "200%",
                                transition: { duration: 0.75 }
                            }
                        }}
                    >
                        <Text variant="card-header" size="page-header" >Welcome{user === null || typeof user === "undefined" ? `` : ` ${user?.firstName}`}</Text>
                    </MotionBox>
                </MotionBox>
                <MotionImage src={Images.handShake} sx={{
                    boxSize: "167px"
                }} variants={{
                    show: {
                        opacity: 1
                    },
                    hide: {
                        opacity: 0
                    }
                }} alt="hand shake" />

                <MotionBox
                    sx={{
                        overflow: "hidden",
                        display: "inline-block"
                    }}
                    variants={{
                        show: {
                            opacity: 1,
                            transition: {
                                duration: 0.2,
                                when: "beforeChildren",
                                staggerChildren: 0.5
                            }
                        },
                        hide: {
                            opacity: 0,
                            transition: {
                                when: "afterChildren"
                            }
                        }
                    }}
                >
                    <MotionFlex sx={{
                        flexDir: "column",
                        gridGap: "8px"
                    }}

                        initial="hide"
                        animate="show"
                        variants={{
                            show: {
                                y: 0,
                                transition: { duration: 0.85 }
                            },
                            hide: {
                                y: "200%",
                                transition: { duration: 0.75 }
                            }
                        }}
                    >
                        <Button type="submit" variant="primary-button" w="100%" px="131.5px" py="12px">
                            {user === null || typeof user === "undefined" ? `Already on boarded? Login` : `Login as ${user?.email}`}
                        </Button>
                        {(user !== null && typeof user !== "undefined") && <Button variant="just-text" onClick={() => {
                            signOut()
                        }}>Or Sign in with another Account</Button>}
                    </MotionFlex>
                </MotionBox>
                <MotionBox
                    sx={{
                        overflow: "hidden",
                        display: "inline-block"
                    }}
                    variants={{
                        show: {
                            opacity: 1,
                            transition: {
                                duration: 0.2,
                                when: "beforeChildren",
                                staggerChildren: 0.5
                            }
                        },
                        hide: {
                            opacity: 0,
                            transition: {
                                when: "afterChildren"
                            }
                        }
                    }}
                >
                    <MotionFlex sx={{
                        flexWrap: "wrap",
                        gridGap: "1px"
                    }}
                    
                    initial="hide"
                    animate="show"
                    variants={{
                        show: {
                            y: 0,
                            transition: { duration: 0.85 }
                        },
                        hide: {
                            y: "200%",
                            transition: { duration: 0.75 }
                        }
                    }}
                    >
                        <Text> Not on boarded yet?</Text>
                        <NextLink href={links.registerOrganization}><Link href={links.registerOrganization}>Register</Link></NextLink>
                    </MotionFlex>
                </MotionBox>
            </MotionFlex>
        </form>)
}

export default LoginForm