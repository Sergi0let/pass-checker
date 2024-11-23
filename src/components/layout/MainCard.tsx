import { ClearBtn, CopyPass, GenerateBtn, ShowBtn } from "@/components";
import useCrackTime from "@/hooks/useCrackTime";
import useSafePassword from "@/hooks/useSafePassword";
import { changeColor, colorClasses, generateRandomPassword } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
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
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.target.value);
  };

  const handlePasswordDelete = () => updatePassword("");

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(passwordValue);
    toast(`${passwordValue} - ${t("toastCopied")}`);
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
            } h-2 w-full rounded-md transition-all duration-200 ease-in-out`}
          ></div>
        ))}
      </CardFooter>
      <CardContent>
        <p>
          <strong>{t("cardPassStrength")}:</strong> {safeData.safe}
        </p>

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

export { MainCard };
