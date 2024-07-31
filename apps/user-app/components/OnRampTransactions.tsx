import { Card } from "@repo/ui/card";
import ProcessingBadge from "./badges/ProcessingBadge";
import { FailedBadge } from "./badges/FailedBadge";
import SuccessBadge from "./badges/SuccessBadge";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    // TODO: Can the type of `status` be more specific?
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
  <div className="pt-2">
    {transactions.map((t) => (
      <div key={t.time.toString()} className="flex justify-between items-center">
        <div>
          <div className="text-sm">Received EGP</div>
          <div className="flex items-center text-slate-600 text-xs">
            {t.time.toDateString()}
            <span className="ml-3 -mt-5  flex items-center justify-center">
              {t.status === "Success" ? <SuccessBadge /> : t.status === "Failure" ? <FailedBadge /> : <ProcessingBadge />}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          + EGP {t.amount / 100}
        </div>
      </div>
    ))}
  </div>
</Card>
  );
};
