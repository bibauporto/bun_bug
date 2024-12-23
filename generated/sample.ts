import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import typia from 'typia';
export const t = {
    string: (() => { const __is = (input: any): input is string => "string" === typeof input; let _errorFactory: any; return (input: any, errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error): string => {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            ((input: any, _path: string, _exceptionable: boolean = true) => "string" === typeof input || __typia_transform__assertGuard._assertGuard(true, {
                method: "typia.createAssert",
                path: _path + "",
                expected: "string",
                value: input
            }, _errorFactory))(input, "$input", true);
        }
        return input;
    }; })()
};
