import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Skeleton, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { PageContent } from 'ui';
import { GameUpdateForm, FormData } from '@/components/forms/GameUpdateForm';
import { MainLayout } from '@/components/layouts/MainLayout';
import { useGame } from '@/hooks/useGame';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  const router = useRouter();
  const { gameId } = router.query;

  const toast = useToast();

  const { game, update: updateGame } = useGame((gameId ?? '') as string);

  const pageTitle = game?.name ?? '...';
  const onSubmit = useCallback(
    async (data: FormData) => {
      const resGame = await updateGame(data);
      if (!resGame) {
        throw new Error('Not found game');
      } else {
        toast({
          status: 'success',
          title: 'updated game',
          description: `id: ${resGame.id}`,
        });
      }
    },
    [updateGame, toast],
  );

  return (
    <>
      <Head>
        <title>{pageTitle} | Otoge Bookmark Admin</title>
      </Head>
      <MainLayout pageTitle={pageTitle}>
        <PageContent>
          <Skeleton isLoaded={!!game} color="white">
            {game && <GameUpdateForm game={game} onSubmit={onSubmit} />}
          </Skeleton>
        </PageContent>
      </MainLayout>
    </>
  );
};

export default withAuthenticationRequired(Page);
