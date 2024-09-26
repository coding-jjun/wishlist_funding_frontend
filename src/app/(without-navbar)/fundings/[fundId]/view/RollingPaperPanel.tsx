import useRollingPapersQuery from "@/query/useRollingPapersQuery";
import { Stack, Typography } from "@mui/material";
import { ProfileBox } from "@/components/profile";
import { MoneyChip } from "@/components/chip";
import { SizeToggleImage } from "@/components/image";

interface Props {
  fundUuid: string;
}

export default function RollingPaperPanel({ fundUuid }: Props) {
  const { data: rollingPapers } = useRollingPapersQuery(fundUuid);

  return (
    <>
      {rollingPapers?.map((paper) => (
        <ProfileBox
          key={`rolling-paper-${paper.rollId}`}
          userName={paper?.userNick ?? "익명"}
          regAt={paper?.regAt.toString()}
          description={<MoneyChip amount={paper.donAmnt} />}
          content={
            <Stack direction="column" spacing={1}>
              <Typography variant="body1">{paper.rollMsg}</Typography>
              {paper.rollImg ?? (
                <SizeToggleImage
                  src={paper.rollImg}
                  alt={"롤링페이퍼"}
                  width={100}
                />
              )}
            </Stack>
          }
        />
      ))}
    </>
  );
}
