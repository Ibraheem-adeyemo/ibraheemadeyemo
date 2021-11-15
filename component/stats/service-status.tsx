import { Text } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react"
import { Stat } from "."
import { StatsA } from "../../models/stats-models";
import { SkeletonLoader } from "..";
import { AppCard } from "../app";


export default function ServiceStatus(props: any) {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<StatsA[]>()


  const getStats = useCallback(() => {

    const boxSize = {
      width: ["224px", "224px", "224px", "224px", "224px", "222px"],
      height: ["159px", "159px", "159px", "159px", "159px", "189px"]
    }
    setLoading(prev => !prev)
    return [{

      ...boxSize,
      headerName: "ATM In Service",
      totalNumber: 1200,
      status: "green",
      percentage: "6.0%",
      days: "Last 7 days"
    }, {
      ...boxSize,
      headerName: "ATM Out Service",
      totalNumber: 500,
      status: "green",
      percentage: "6.0%",
      days: "Last 7 days"
    },]
  }, [])
  useMemo(() => {
    // console.log("waiting")
    setTimeout(() => {
      setStats(getStats())

    }, 10000);
  }, [getStats])
  const Skeleton = useCallback(() => <SkeletonLoader rows={3} columns={2} width="200px" height="50px" />, [])

  return (
    <AppCard topic={<Text variant="card-header" size="card-header">What is our service</Text>} statsComponent={Stat}>
        {!loading ? stats?.map((x, i) =>
          <Stat key={i} {...x} />
        ) :
        <Skeleton />
        }
    </AppCard>
  )
}