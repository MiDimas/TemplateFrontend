import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/config/tests/renderWithTranslation/renderComponent';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {

    test('Страница не найдена', async () => {
        renderComponent(<AppRouter />, {
            route: '/sdfjdsagh',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
});
