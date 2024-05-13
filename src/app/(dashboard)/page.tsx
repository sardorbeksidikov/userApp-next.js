'use client';

import { useFetchInitialData } from '@/app/hooks/useFetchInitialData';



import '@/styles/dashboard.scss';
import { ListViewProvider } from '@/context/ListViewContext';
import { UsersList } from '@/components/UsersList';
import { ControlBar } from '@/components/ControlBar';

export default function DashboardPage() {
  const { isLoading } = useFetchInitialData();

  return (
    <ListViewProvider>
      <ControlBar/>
      {isLoading ? <p>Loading...</p> : <UsersList />}
    </ListViewProvider>
  );
}
