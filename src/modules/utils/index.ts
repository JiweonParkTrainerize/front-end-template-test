import { ColorHEX } from '../../constants/types';

const isHEX = (color: string): color is ColorHEX => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

/**
 * Decode a Base64 encoded configuration for the widget and return the accent color.
 * @param codedConfig Base64 encoded configuration string.
 * @returns The accent color extracted from the configuration, or undefined if input is empty or invalid.
 */
export const getAccentColor = (codedConfig: string | null): ColorHEX | null => {
    if (!codedConfig) {
        return null;
    }
    const decodedConfig = JSON.parse(atob(codedConfig));
    return isHEX(decodedConfig?.accentColor) ? decodedConfig.accentColor : null;
};
