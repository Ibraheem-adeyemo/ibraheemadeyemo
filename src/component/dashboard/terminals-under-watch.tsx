import React, { FC, useContext, useEffect, useState } from "react"
import { Stat } from "../stats"
import { StatsA } from "../../models/stats-models";
import { SkeletonLoader } from "..";
import { AppCard } from "../app";
import { useLoading } from "../../hooks";
import { apiUrlsv1, appRoles, StatsName } from "../../constants";
import useSWR from "swr";
import { ATMInSupervisor, Paginate } from "../../models";
import { AuthContext, StatsContext } from "../../providers";
import { useToast, Text } from "@chakra-ui/react";
import _, { sumBy } from "lodash";

interface TerminalsUnderWatchProps {
  title?: string
}

const TerminalsUnderWatch: FC<TerminalsUnderWatchProps> = (props: TerminalsUnderWatchProps) => {
  const { token, userDetail } = useContext(AuthContext)
  const { selectedTenantCode, institutions, institutionsError } = useContext(StatsContext)
  let atmInSupervisorUrl = apiUrlsv1.atmInSupervisor
  if (userDetail && (userDetail.role.name !== appRoles.superAdmin || typeof selectedTenantCode !== "undefined") && (userDetail.role.name !== appRoles.superAdmin || selectedTenantCode !== "0")) {

    if (userDetail.role.name !== appRoles.superAdmin) {
      atmInSupervisorUrl = `${apiUrlsv1.atmInSupervisor}/${userDetail.tenant.code}`
    } else {
      atmInSupervisorUrl = `${apiUrlsv1.atmInSupervisor}/${selectedTenantCode}`
    }
  }
  atmInSupervisorUrl = token && userDetail ? atmInSupervisorUrl : ""
  const { data: atmInSupervisor, mutate: _mutate, error: atmInSupervisorError } = useSWR<Paginate<ATMInSupervisor>>(atmInSupervisorUrl ? atmInSupervisorUrl : null)
  const [loading, setLoading] = useLoading({ isLoading: true, text: "" })
  const [stats, setStats] = useState<StatsA[]>()
  const toast = useToast()

  useEffect(() => {
    // console.log("waiting")

    const getStats = (): StatsA[] => {

      const boxSize = {
        width: ["224px", "224px", "224px", "224px", "229px", "229px"],
        height: ["159px", "159px", "159px", "159px", "159px", "189px"],
        prefix: "",
        suffix: ""
      }
      return [{
        ...boxSize,
        headerName: StatsName.atmInSupervisor,
        totalNumber: typeof atmInSupervisor !== "undefined" && typeof atmInSupervisor.content !== "undefined" ? sumBy(atmInSupervisor.content, (atm) => atm.count) : 0,
        status: "green",
        percentage: "6.0%",
        days: "Last 7 days"
      }, {
        ...boxSize,
        headerName: StatsName.atmInCashJam,
        totalNumber: 0,
        status: "green",
        percentage: "6.0%",
        days: "Last 7 days"
      }, {
        ...boxSize,
        headerName: StatsName.atmCassetteErrors,
        totalNumber: 0,
        status: "red",
        percentage: "6.0%",
        days: "Last 7 days",
      },]
    }
    setStats(getStats())
    if (typeof atmInSupervisorError !== "undefined") {
      toast({
        status: "error",
        title: atmInSupervisorError,
        variant: "left-accent",
        isClosable: true
      })
    }


    if ((typeof atmInSupervisor === "undefined" && typeof atmInSupervisorError === "undefined")) {
      setLoading({ isLoading: true, text: "" })
    } else {
      setLoading({ isLoading: false, text: "" })
    }
  }, [atmInSupervisor, atmInSupervisorError])
  return (
    <AppCard topic={<Text variant="card-header" size="card-header">{typeof props.title !== "undefined" && props.title !== "" ? props.title : "What Terminals are under watch"}</Text>}>

      {!loading.isLoading ?
        <>
          {stats?.map((x, i) => <Stat key={i} {...x} />)}
        </> :
        <SkeletonLoader rows={3} columns={3} width="200px" height="10px" gap="30px" />
      }
    </AppCard>
  )
}
export default TerminalsUnderWatch