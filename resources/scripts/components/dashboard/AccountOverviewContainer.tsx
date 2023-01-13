import ContentBox from '@/components/elements/ContentBox';
import UpdatePasswordForm from '@/components/dashboard/forms/UpdatePasswordForm';
import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';
import PageContentBlock from '@/components/elements/PageContentBlock';
import tw from 'twin.macro';
import { breakpoint } from '@/theme';
import styled from 'styled-components';
import MessageBox from '@/components/MessageBox';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    ${tw`flex flex-wrap`};

    & > div {
        ${tw`w-full`};

        ${breakpoint('sm')`
      width: calc(50% - 1rem);
    `}

        ${breakpoint('md')`
      ${tw`w-auto flex-1`};
    `}
    }
`;

export default () => {
    const { state } = useLocation();

    return (
        <PageContentBlock title="帳戶概況">
            {state?.twoFactorRedirect && (
                <MessageBox title="需要啟用動態口令認證" type="error">
                    您的帳戶必須啟用動態口令認證才能繼續使用。
                </MessageBox>
            )}

            <Container css={[tw`lg:grid lg:grid-cols-3 mb-10`, state?.twoFactorRedirect ? tw`mt-4` : tw`mt-10`]}>
                <ContentBox title="更新密碼" showFlashes="account:password">
                    <UpdatePasswordForm />
                </ContentBox>

                <ContentBox css={tw`mt-8 sm:mt-0 sm:ml-8`} title="更新電子郵箱位址" showFlashes="account:email">
                    <UpdateEmailAddressForm />
                </ContentBox>

                <ContentBox css={tw`md:ml-8 mt-8 md:mt-0`} title="配置動態口令認證">
                    <ConfigureTwoFactorForm />
                </ContentBox>
            </Container>
        </PageContentBlock>
    );
};

