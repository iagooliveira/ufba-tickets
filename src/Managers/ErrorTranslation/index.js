/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import i18n from '../../I18n/index' //'I18n';

export default class ErrorTranslation {
  /**
   * @param {*} error
   * @returns {string|string[]}
   */
  async humanize(error, namespace) {
    let errorMessage;

    if (typeof error === 'string') {
      errorMessage = await this.getErrorDescription(namespace, error);
      return errorMessage;
    }

    if (error?.errors) {
      const { errors } = error;

      errorMessage = await Promise.all(
        errors.map(item =>
          this.getErrorDescription(namespace, item.defaultMessage)
        )
      );
      if (errorMessage) return errorMessage;
    }
    if (error?.message) {
      const messageKey = error.message
        .replaceAll('.', '_')
        .replaceAll(':', '_')
        .toUpperCase();
      errorMessage = await this.getErrorDescription(namespace, messageKey);
      if (errorMessage !== this.getErrorKey(namespace, messageKey))
        return errorMessage;
    }

    if (error?.code) {
      errorMessage = await this.getErrorDescription(namespace, error.code);
      if (errorMessage !== String(error.code)) return errorMessage;
    }

    if (error?.status) {
      errorMessage = await this.getErrorDescription(namespace, error.status);
      if (errorMessage !== String(error.status)) return errorMessage;
    }

    return await this.getErrorDescription('ERROR', 'DEFAULT_ERROR');
  }

  getErrorKey(namespace, key) {
    return `${namespace ? `${namespace}:` : ''}${key}`;
  }

  async getErrorDescription(namespace, key) {
    return await i18n.t(this.getErrorKey(namespace, key));
  }
}
