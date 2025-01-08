/* eslint-disable no-magic-numbers */
import { test } from '@playwright/test';
import {
  waitForPageInit,
  takeEditorScreenshot,
  pressButton,
  bondsSettings,
  scrollToDownInSetting,
  openFileAndAddToCanvas,
  openSettings,
  resetAllSettingsToDefault,
  selectLayoutTool,
} from '@utils';

test.describe('ACS Style Settings', () => {
  test.beforeEach(async ({ page }) => {
    await waitForPageInit(page);
  });

  test.afterEach(async ({ page }) => {
    await resetAllSettingsToDefault(page);
  });

  test('Verify ACS Style button and setting after clicking', async ({
    page,
  }) => {
    /*
    Test case: https://github.com/epam/ketcher/issues/5156
    Description: add new option ACS style
    */
    await openFileAndAddToCanvas('KET/layout-with-diagonally-arrow.ket', page);
    await openSettings(page);
    await pressButton(page, 'Set ACS Settings');
    await page.waitForTimeout(3000);
    await takeEditorScreenshot(page);
    await bondsSettings(page);
    await scrollToDownInSetting(page);
    await takeEditorScreenshot(page);
    await pressButton(page, 'Apply');
    await pressButton(page, 'OK');
    await selectLayoutTool(page);
    await takeEditorScreenshot(page);
  });

  test('Verify default settings after clicking ACS Style button and after that on Reset', async ({
    page,
  }) => {
    /*
    Test case: https://github.com/epam/ketcher/issues/5156
    Description: add new option ACS style
    */
    await openFileAndAddToCanvas('KET/layout-with-long-molecule.ket', page);
    await openSettings(page);
    await pressButton(page, 'Set ACS Settings');
    await pressButton(page, 'Apply');
    await pressButton(page, 'OK');
    await selectLayoutTool(page);
    await takeEditorScreenshot(page);
    await openSettings(page);
    await pressButton(page, 'Reset');
    await takeEditorScreenshot(page);
    await bondsSettings(page);
    await scrollToDownInSetting(page);
    await takeEditorScreenshot(page);
    await pressButton(page, 'Apply');
    await pressButton(page, 'OK');
    await takeEditorScreenshot(page);
  });
});
