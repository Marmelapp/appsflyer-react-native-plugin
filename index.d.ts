/**
 * Typescript Definition Sync with v5.1.1
 **/
declare module "react-native-appsflyer" {
    type Response<T>    = void | Promise<T>;
    type SuccessCB      = (result?:any) => any;
    type ErrorCB        = (error?:any) => any;
    export type ConversionData = {
        status: "success" | "failure",
        type: "onAppOpenAttribution"
            | "onInstallConversionDataLoaded"
            | "onAttributionFailure"
            | "onInstallConversionFailure",
        data: {
            is_first_launch: "true" | "false";
            media_source: string;
            campaign: string;
            af_status : "Organic" | "Non-organic";
            [key:string]:any;
        }
    }

    export enum AF_EMAIL_CRYPT_TYPE {
        NONE,
        SHA1,
        MD5,
        SHA256
    }

    export interface InitSDKOptions {
        devKey:string;
        appId?:string; //for iOS
        isDebug?:boolean;
    }

    export interface SetEmailsOptions {
        emails?:string[];
        emailsCryptType:AF_EMAIL_CRYPT_TYPE | 0 | 1 | 2 | 3;
    }

    export interface GenerateInviteLinkParams {
        channel: string;
        campaign?: string;
        customerID?: string;
        userParams?: object;
        [key:string]:any;
    }

    const appsFlyer: {
        onInstallConversionData(callback:(data:ConversionData)=>any): () => void;
        onAppOpenAttribution(callback:(data:any)=>any): () => void;

        initSdk(options:InitSDKOptions, successC?:SuccessCB, errorC?:ErrorCB): Response<string>
        trackEvent(eventName:string, eventValues:object, successC?:SuccessCB, errorC?:ErrorCB): Response<string>
        setUserEmails(options:SetEmailsOptions, successC?:SuccessCB, errorC?:ErrorCB): void
        setAdditionalData(additionalData:object, successC?:SuccessCB): void
        getAppsFlyerUID(callback:(error:Error, uid:string)=>any): void
        setCustomerUserId(userId:string, successC?:SuccessCB): void
        stopTracking(isStopTracking:boolean, successC?:SuccessCB): void
        setAppInviteOneLinkID(oneLinkID:string, successC?:SuccessCB): void
        generateInviteLink(params:GenerateInviteLinkParams, successC?:SuccessCB, errorC?:ErrorCB): void
        trackCrossPromotionImpression(appId:string, campaign:string): void
        trackAndOpenStore(appId:string, campaign:string, params: object): void
        setCurrencyCode(currencyCode:string, successC:SuccessCB): void
        setDeviceTrackingDisabled(isDeviceTrackingDisabled:boolean, successC:SuccessCB): void

        /**
         * For iOS Only
         * */
        trackAppLaunch(): void
        trackLocation(longitude:number, latitude:number, callback:SuccessCB): void

        /**
         * For Android Only
         * */
        sendDeepLinkData(callback:any): void
        setCollectIMEI(isCollect:boolean, successC?:SuccessCB): void
        setCollectAndroidID(isCollect:boolean, successC?:SuccessCB): void
        updateServerUninstallToken(token:string, successC?:SuccessCB): void
        /** @deprecated - please use updateServerUninstallToken **/
        setGCMProjectNumber(gcmProjectNumber:any, successC?:SuccessCB, errorC?:ErrorCB): void
        /** @deprecated - please use updateServerUninstallToken **/
        enableUninstallTracking(gcmProjectNumber:any, successC?:SuccessCB): void
    };

    export default appsFlyer;
}
