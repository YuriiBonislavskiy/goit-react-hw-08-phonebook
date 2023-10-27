import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const loginSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={40} />
      {/* <Skeleton variant="rounded" width={210} height={60} /> */}
    </Stack>
  );
}

const contactsSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={80} height={30} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rectangular" width={60} height={20} />
    </Stack>
  );
};

const skeletons = {
  loginSkeleton,
  contactsSkeleton
};

export default skeletons;