import useCharTypes from "@/hooks/useCharTypes";
import useCrackTime from "@/hooks/useCrackTime";
import useSafePassword from "@/hooks/useSafePassword";
import {
  capitalize,
  changeColor,
  colorClasses,
  generateRandomPassword,
} from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import ClearBtn from "../elements/ClearBtn";
import CopyPass from "../elements/CopyPass";
import GenerateBtn from "../elements/GenerateBtn";
import ShowBtn from "../elements/ShowBtn";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type MainCardProps = {
  className?: string;
};

const MainCard = ({ className }: MainCardProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const { passwordValue, safeData, updatePassword } = useSafePassword();
  const { crackTime } = useCrackTime(passwordValue);
  const { charTypes } = useCharTypes(passwordValue);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.target.value);
  };

  const handlePasswordDelete = () => updatePassword("");

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(passwordValue);
    toast(`${passwordValue} - ${t("toastCopied")}`);
    setTimeout(() => toast(`${safeData.safe} ${t("toastPass")}`), 1500);
  };

  const handleShowPassword = () => {
    setShowPassword((val) => !val);
  };
  const handleGeneratePassword = useCallback(() => {
    updatePassword(generateRandomPassword());
  }, [updatePassword]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className={`${changeColor(safeData.safe)}`} />
          {t("cardPassTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="pass">{t("cardPassLabel")}</Label>
        <div className="relative h-full">
          <Input
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            id="pass"
            placeholder={t("cardPassPlaceholder")}
            value={passwordValue}
            className="pr-10"
          />
          <ClearBtn
            isShow={passwordValue}
            deletePassword={handlePasswordDelete}
            className="absolute right-10 top-1/2 -translate-y-1/2"
          />
          <ShowBtn
            show={showPassword}
            toggleShow={handleShowPassword}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {safeData.levels.map((color: string, i: number) => (
          <div
            key={i}
            className={`${
              colorClasses[color] || "bg-gray-500"
            } w-full h-2 rounded-md transition-all duration-200 ease-in-out`}
          ></div>
        ))}
      </CardFooter>
      <CardContent>
        <div className="flex items-center gap-2">
          <strong>{t("cardPassCharTypes")}:</strong>
          <div className="flex gap-2">
            {charTypes.map((type: string) => (
              <Badge variant="outline" key={type}>
                {capitalize(type)}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          <strong>{t("cardPassCrack")}:</strong> {crackTime}
        </p>
        {passwordValue ? (
          <CopyPass
            className="mt-4 w-full"
            handleCopyPassword={handleCopyPassword}
          />
        ) : (
          <GenerateBtn
            className="mt-4 w-full"
            handleGeneratePassword={handleGeneratePassword}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default MainCard;
