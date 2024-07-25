import express from "express";
import db from "@repo/db/client";

const app = express();

app.post("/hdfcWebhook", async (req, res) => {
  // TODO : adding zod validation
  // TODO : check if the token is valid and came from hdfc bank for example
  const paymentInformation = {
    token: req.body.token,
    amount: req.body.amount,
    userId: req.body.user_identifier,
  };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      captured: true,
      status: "Success",
    });
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Error while processing the transaction, please try again later",
    });
  }

  // TODO: update the database and user account balance
});
